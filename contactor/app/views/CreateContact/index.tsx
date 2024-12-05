import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateContact from "@/app/components/CreateContact";
import Header from "@/app/components/Header";

export const DisplayEditContact = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Header title="Add contact" navigation={navigation} showBackButton={true} titleStyle={styles.title} />
      <CreateContact />
    </View>
  );
};

export default DisplayEditContact;
