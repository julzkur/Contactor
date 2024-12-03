import React, { useState, useEffect } from "react";
import { View, TextInput } from "react-native";
import Header from "../Header";
import { styles } from "./styles";

import { ContactService } from "@/app/services/ContactService";

const DisplayCreateContact: React.FC<{ navigation: any }> = ({ navigation }) => {
  const contactService = new ContactService();
  /* 
  style={styles.input}
  value={name}
  onChangeText={setName}
  */
  return (
    <View>
      <Header title="Create Contact" />
      
    </View>
  );
}; 

export default DisplayCreateContact;