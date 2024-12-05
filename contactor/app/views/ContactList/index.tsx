import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import DisplayContactList from "@/app/components/ContactList";
import Header from "@/app/components/Header";
import CreateButton from "@/app/components/CreateButton";

export const ContactListView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header title="Contacts" navigation={navigation} showBackButton={false} titleStyle={styles.title} />
      
      {/* Pass navigation to CreateButton */}
      <CreateButton navigation={navigation} />
      
      {/* Contact List */}
      <DisplayContactList navigation={navigation} />
    </View>
  );
};

export default ContactListView;



