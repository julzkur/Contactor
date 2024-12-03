import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import DisplayContactList from "@/app/components/ContactList";

export const ContactListView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <DisplayContactList navigation={navigation}/>
    </View>
  );
};

export default ContactListView;
