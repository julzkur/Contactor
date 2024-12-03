import React from "react";
import { Text } from "react-native";
import {useNavigation} from "@react-navigation/native"
import styles from "./styles";

export const editButton = () => {
    
  const navigation = useNavigation()

  return (
    <button style={styles.button} //missing to navigate to another screen
    >
      <Text style={styles.buttonText}>Edit</Text>
    </button>
    )
};

export default editButton;