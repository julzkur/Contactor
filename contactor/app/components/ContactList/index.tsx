import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { dummyContacts } from "@/app/resources/contacts";
import ContactCard from "../ContactCard";
import Header from "../Header";
import SearchBar from "../SearchBar";
import { styles } from "./styles";

const DisplayContactList = () => {
    const [filteredContacts, setFilteredContacts] = useState(
        [...dummyContacts].sort((a, b) => a.name.localeCompare(b.name))
      );

    const handleSearch = (searchText: string) => {
        const filtered = dummyContacts.filter((contact) =>
          contact.name.toLowerCase().includes(searchText.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));

        setFilteredContacts(filtered);
      };

    return (
        <View style={styles.container}>
            <Header title="Contacts" />
            <SearchBar onSearch={handleSearch} />
            <FlatList
                data={filteredContacts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ContactCard contact={item} />}
            />
        </View>
    );
  };

export default DisplayContactList;
