import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Contact from "@/app/models/contact";
import Header from "../../components/Header";
import { deleteButton } from "@/app/components/DeleteButton";
import { editButton } from "@/app/components/EditButton";

interface contactProps {
    contact: Contact;
  }

// in Header I want the name of the contact to show, so that is missing

const ContactView: React.FC<contactProps> = ({ contact }) => {
  return (
    <View style={styles.container}>
        <Header title="Contact"/>
        <div>
            <Image source={{ uri: contact.thumbnail }} style={styles.contactPhoto}/>
        </div>
        <div>
            <Text style={styles.nameText}>{contact.name}</Text>
        </div>
        <div>
            <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
        </div>
    </View>
  )
}

export default ContactView;