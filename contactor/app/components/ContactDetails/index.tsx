import React, {useEffect, useState} from "react";
import { View, Image } from "react-native";
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

  const service = new ContactService();

  const wrappedDelete = () => {
    service.deleteContact(contact.id);
    navigation.goBack();
  };
  
  return (
    <><Header title={contact.name} navigation={navigation} /><View style={styles.container}>
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
      </View></>
  )
}

export default ContactDetails;