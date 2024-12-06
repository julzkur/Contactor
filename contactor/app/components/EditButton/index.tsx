import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface EditButtonProps {
  contactId: string;
  navigation: any;
}

export const EditButton: React.FC<EditButtonProps> = ({ contactId, navigation }) => {

  return (
    <TouchableOpacity style={styles.button} onPress={navigation.navigate("DisplayEditContact")}>
      <Text style={styles.buttonText}>Edit</Text>
    </TouchableOpacity>
    )
};

export default EditButton;