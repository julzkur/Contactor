import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { dummyContacts } from "@/app/resources/contacts";
import ContactCard from "../Contact";
import { styles } from "./styles";

const DisplayContactList = () => {
    return (
      <FlatList
        data={dummyContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactCard contact={item} />}
      />
    );
  };

export default DisplayContactList;
