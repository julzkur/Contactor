import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import ContactDetails from "@/app/components/ContactDetails";


const ContactView = ({ navigation, route }: any) => {
  const { contact } = route.params; // Get the contact from route params

  if (!contact) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', fontSize: 16 }}>No contact found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ContactDetails contact={contact} navigation={navigation} />
    </View>
  );
};

export default ContactView;