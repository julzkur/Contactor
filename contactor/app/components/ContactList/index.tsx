import React, { useState, useEffect } from "react";
import { View, FlatList, Button } from "react-native";
import ContactCard from "../ContactCard";
import SearchBar from "../SearchBar";
import { styles } from "./styles";
import { ContactService } from "@/app/services/ContactService";
import { ContactModel } from "@/app/models/contact";

const DisplayContactList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactModel[]>([]);
  
  const contactService = new ContactService();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const allContacts = await contactService.getAllContacts();
        const sortedContacts = allContacts.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(sortedContacts); 
        setFilteredContacts(sortedContacts);
        console.log("Fetched contacts:", allContacts);

      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
  
    const unsubscribe = navigation.addListener("focus", fetchContacts);
  
    return unsubscribe; 
  }, [navigation]);

  const handleSearch = (searchText: string) => {
      const filtered = contacts
      .filter((contact) =>
        contact.name.toLowerCase()
        .includes(searchText.toLowerCase())
      ).sort((a, b) => a.name.localeCompare(b.name));

      setFilteredContacts(filtered);
  };

  const handleDelete = (contactId: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  //FOR DEBUGGING IF U FUCK UP THE CONTACT DIR INTERNALLY ON PHONE

  const handleReset = async () => {
    await contactService.resetDirectory();
    console.log("Contacts directory reset.");
  };

  return (
      <View style={styles.container}>
          <SearchBar onSearch={handleSearch} />
          <FlatList
              data={filteredContacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContactCard contact={item} navigation={navigation} />
              )}
          />
          {/* <View>
            <Button title="Reset Contacts Directory" onPress={handleReset} />
          </View> */}

      </View>
  );
};

export default DisplayContactList;