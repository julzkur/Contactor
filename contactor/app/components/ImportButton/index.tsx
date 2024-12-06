import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ContactService } from "@/app/services/ContactService";
import styles from "./styles";
import Contact, {ContactModel} from "@/app/models/contact";
import * as Contacts from 'expo-contacts';
import { uuidv7 } from "uuidv7";

interface ImportButtonProps {
    refreshContacts: () => void;
  }
  
  export const ImportButton: React.FC<ImportButtonProps> = ({ refreshContacts }) => {
    const service = new ContactService();

    const importContacts = async () => {
        try {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status !== 'granted') {
            console.error('Permission to access contacts was denied');
            return;
          }
      
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers, Contacts.Fields.Image],
          });
      
          const validContacts = data.filter(
            (contact) => contact.name && contact.phoneNumbers
          );
    
          const transformedContacts = validContacts.map((contact) => {
            return new ContactModel(
              contact.id ?? uuidv7(),
              contact.name, 
              contact.phoneNumbers?.[0]?.number ?? '', 
              contact.image ? contact.image.uri : undefined 
            );
          });
      
          transformedContacts.forEach((contact) => {
            service.saveImportedContact(contact); 
          });
      
          refreshContacts();
          
        } catch (error) {
          console.error('Error importing contacts:', error);
        }
      };

    return (
        <TouchableOpacity onPress={importContacts} style={styles.button}>
        <Text style={styles.buttonText}>Import Contacts</Text>
        </TouchableOpacity>
    )
};

export default ImportButton;