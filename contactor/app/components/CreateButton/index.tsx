import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const CreateButton = ({ navigation }: { navigation: any }) => {
  const handlePress = () => {
    navigation.navigate("CreateContact"); // Navigate to the CreateContact screen
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={handlePress}>
      <Text style={styles.backButtonText}>+</Text>
    </TouchableOpacity>
  );
};

export default CreateButton;
