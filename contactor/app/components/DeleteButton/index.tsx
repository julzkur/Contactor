import React from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { ContactService } from "@/app/services/ContactService";

interface DeleteButtonProps {
    contactId: string;
    navigation: any;
    handleDelete: () => void; // updates contact list after deletion
  }
  
  export const DeleteButton: React.FC<DeleteButtonProps> = ({ handleDelete }) => {

      const confirmDelete = () => {
        Alert.alert(
          "Delete Contact",
          "Are you sure you want to delete this contact?",
          [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", style: "destructive", onPress: handleDelete },
          ]
        );
      };

    return (
        <TouchableOpacity style={styles.button} onPress={confirmDelete}>
            <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
    )
};

export default DeleteButton;