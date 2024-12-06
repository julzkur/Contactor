import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Contact from "@/app/models/contact";

interface EditButtonProps {
  contact: Contact;
  navigation: any;
}

export const EditButton: React.FC<EditButtonProps> = ({ contact, navigation }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={() =>
        navigation.navigate("EditContact", {contact})
      }
    >
      <Text style={styles.buttonText}>Edit</Text>
    </TouchableOpacity>
    )
};

export default EditButton;