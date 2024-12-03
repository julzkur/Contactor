import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Contact from "@/app/models/contact";
import styles from "./styles";

interface ContactCardProps {
  contact: Contact;
  navigation: any;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, navigation }) => {

    const handlePress = () => {
        navigation.navigate("Contact", { contact });
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.contactItem}>
            <Image source={{ uri: contact.thumbnail }} style={styles.thumbnail}/>
            <View style={styles.contactDetails}>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ContactCard;