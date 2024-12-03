import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Header from "../Header";
import { styles } from "./styles";

import { ContactService } from "@/app/services/ContactService";

const DisplayCreateContact: React.FC<{ navigation: any }> = ({ navigation }) => {
  const contactService = new ContactService();
  return (
    <View>
    </View>
  );
}; 

export default DisplayCreateContact;