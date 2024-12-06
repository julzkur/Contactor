import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import { ContactService } from "@/app/services/ContactService";
import styles from "./styles";


interface SaveButtonProps {
    contact: { name: string; phoneNumber: string; thumbnail: string };
    navigation: any;
}
  
export const SaveNewContact: React.FC<SaveButtonProps> = ({ contact, navigation }) => {

    const contactService = new ContactService();

    const handleSave = () => {
        if (!contact.name.trim()) {
          Alert.alert("Error", "Name can't be empty");
          return; 
        }
      
        const asyncResult = contactService.createContact(contact.name, contact.phoneNumber, contact.thumbnail);
        asyncResult
          .then((result) => {
            console.log('Result:', result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
        navigation.navigate('ContactList', { navigation });
      };

    return (
    <TouchableOpacity style={styles.button} onPress={handleSave}>
    <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    )
};

export default SaveNewContact;