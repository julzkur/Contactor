import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";
import ContactDetails from "@/app/components/ContactDetails";

const ContactView = ({navigation, route}: any) => {
  
  return (
    <View style={styles.container}>
        <ContactDetails route={route} navigation={navigation} />
    </View>
  )
};

export default ContactView;