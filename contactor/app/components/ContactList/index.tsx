import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { dummyContacts } from "@/app/resources/contacts";
import ContactCard from "../ContactCard";
import Header from "../Header";
import { styles } from "./styles";

const DisplayContactList = () => {
  return (
    <View style={styles.container}>
      <Header title="Contacts" />
      <FlatList
        data={dummyContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactCard contact={item} />}
      />
    </View>
  );
};

export default DisplayContactList;
