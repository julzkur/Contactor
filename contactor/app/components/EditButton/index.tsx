import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface EditButtonProps {
  contactId: string;
  navigation: any;
  handleDelete: () => void; // updates contact list after deletion
}

export const EditButton = () => {

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Edit</Text>
    </TouchableOpacity>
    )
};

export default EditButton;