import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import ContactDetails from "@/app/components/ContactDetails";


const ContactView = ({ navigation, route }: any) => {
  const { contact } = route.params; // Get the contact from route params

  return (
    <View style={styles.container}>
      <ContactDetails contact={contact} navigation={navigation} />
    </View>
  );
};

export default ContactView;