import React from "react";
import { View, Text, Image } from "react-native";
import Contact from "@/app/models/contact";
import styles from "./styles"; // Import the styles

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
    return (
        <View style={styles.contactItem}>
            <Image
            source={{ uri: contact.thumbnail }}
            style={styles.thumbnail}
            />
            <View style={styles.contactDetails}>
                <Text style={styles.name}>{contact.name}</Text>
                <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
            </View>
        </View>
    );
};

export default ContactCard;