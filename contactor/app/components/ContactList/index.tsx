import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { dummyContacts } from "@/app/resources/contacts";
import ContactCard from "../ContactCard";
import { ContactService } from "@/app/services/ContactService"; 
import { ContactModel } from "@/app/models/contact";
import SearchBar from "../SearchBar";
import { styles } from "./styles";

const DisplayContactList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [contacts, setContacts] = useState<ContactModel[]>([]); // Store all contacts
  const [filteredContacts, setFilteredContacts] = useState<ContactModel[]>([]);
  
  const contactService = new ContactService();

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const allContacts = await contactService.getAllContacts();
        const sortedContacts = allContacts.sort((a, b) => a.name.localeCompare(b.name));
        setContacts(sortedContacts); // Set sorted contacts from the service
        setFilteredContacts(sortedContacts); // Initially display all contacts
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
    
    fetchContacts();
  }, []);

  const handleSearch = (searchText: string) => {
      const filtered = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchText.toLowerCase())
      ).sort((a, b) => a.name.localeCompare(b.name));

      setFilteredContacts(filtered);
  };

  const handleDelete = (contactId: string) => {
    // Remove the deleted contact from the list
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };

  return (
      <View style={styles.container}>
          <SearchBar onSearch={handleSearch} />
          <FlatList
              data={filteredContacts}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <ContactCard contact={item} navigation={navigation} handleDelete={handleDelete} />
              )}
          />
      </View>
  );
};

export default DisplayContactList;
