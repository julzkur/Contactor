import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { dummyContacts } from "@/app/resources/contacts";
import ContactCard from "../ContactCard";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { styles } from "./styles";
import { ContactService } from "@/app/services/ContactService";
import { ContactModel } from "@/app/models/contact";

const DisplayContactList: React.FC<{ navigation: any }> = ({ navigation }) => {
  const contactService = new ContactService();
  const [filteredContacts, setFilteredContacts] = useState<ContactModel[]>([]);
  
  useEffect(() => {
    contactService.getAllContacts().then((contacts) => {
      setFilteredContacts(contacts); // Set fetched contacts in state
    });
  }, []);

  const handleSearch = (searchText: string) => {
    const filtered = filteredContacts
      .filter((contact) =>
        contact.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredContacts(filtered);
  };

  return (
    <View style={styles.container}>
      <Header title="Contacts" />
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactCard contact={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default DisplayContactList;
