import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ContactService } from "@/app/services/ContactService";
import styles from "./styles";
import Contact from "@/app/models/contact";

interface SaveButtonProps {
    contact: Contact;
    navigation: any;
}
  
export const SaveButton: React.FC<SaveButtonProps> = ({ contact, navigation }) => {

    const contactService = new ContactService();

    const saveContact = async () => {
        if (!contact.name || !contact.phoneNumber) {
            alert("Name and phone number are required!");

            return;
        }

        try {
            await contactService.editContact(
                contact.id,
                contact.name,
                contact.phoneNumber,
                contact.thumbnail || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbySPOVJMWqKXXDjw9zQLk4k7k7T2xDXjzsw&s"
            );
            alert("Contact updated successfully!");
            navigation.navigate("Contact", { updatedContact: contact });

        } catch (error) {
            alert("Failed to update contact.");
            console.error(error);
        }
        
    };

    return (
    <TouchableOpacity style={styles.button} onPress={saveContact}>
    <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    )
};

export default SaveButton;