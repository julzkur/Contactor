import React, {useEffect, useState} from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { DeleteButton } from "@/app/components/DeleteButton";
import { ContactService } from "@/app/services/ContactService";
import { EditButton } from "@/app/components/EditButton"; 
import DetailsTextContainer from "@/app/components/DetailsTextCont";
import Contact from "@/app/models/contact";
import CallButton from '@/app/components/CallButton';

interface ContactDetailsProps {
  contact: Contact;
  navigation: any; 
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ contact, navigation }) => {
  if (!contact) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 16 }}>Contact details not available.</Text>
      </View>
    );
  }

  const service = new ContactService();

  const wrappedDelete = async () => {
    try {
      await service.deleteContact(contact.id);
      alert("Contact deleted successfully!");

      navigation.navigate("ContactList");

    } catch (error) {
      alert("Failed to delete contact.");
      console.error("Error deleting contact:", error);
    }
  };
  
  return (
    <>
    <Header title={contact.name} navigation={navigation} />
    <View style={styles.container}>
          <View>
              <Image source={{ uri: contact.thumbnail }} style={styles.contactPhoto} />
          </View>
          <DetailsTextContainer text={contact.name} />
          <DetailsTextContainer text={contact.phoneNumber} />
          <View style={styles.buttons}>
            <EditButton contact={contact} navigation={navigation} />
            <CallButton phoneNumber={contact.phoneNumber} />
            <DeleteButton contactId={contact.id} handleDelete={wrappedDelete} navigation={navigation} />
          </View>
      </View>
      </>
  )
}

export default ContactDetails;