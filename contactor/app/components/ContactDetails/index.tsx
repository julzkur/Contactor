import React, {useEffect, useState} from "react";
import { View, Image, ActivityIndicator, Text, Alert } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { DeleteButton } from "@/app/components/DeleteButton";
import { EditButton } from "@/app/components/EditButton"; 
import { ContactService } from "@/app/services/ContactService";
import DetailsTextContainer from "@/app/components/DetailsTextCont";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/routes";
import Contact from "@/app/models/contact";
import CallButton from '@/app/components/CallButton';

type ContactScreenRouteProp = RouteProp<RootStackParamList, "Contact">;

interface ContactDetailsRouteParams {
    contact: Contact;
    handleDelete: (contactId: string) => void; // Define the type for handleDelete
  }

interface ContactDetailsProps {
  route: {params: ContactDetailsRouteParams}; 
  navigation: any; 
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ route, navigation }) => {

  const service = new ContactService();

  const { contact, handleDelete } = route.params; 

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
            <DeleteButton contactId={contact.id} handleDelete={wrappedDelete} navigation={navigation} />
            <EditButton contactId={contact.id} navigation={navigation} />
            <CallButton phoneNumber={contact.phoneNumber} />
          </View>
      </View></>
  )
}

export default ContactDetails;