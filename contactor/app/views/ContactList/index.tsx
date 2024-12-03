import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import DisplayContactList from "@/app/components/ContactList";

export const ContactListView = () => {
  return (
    <View style={styles.container}>
      <DisplayContactList />
    </View>
  );
};

export default ContactListView;
