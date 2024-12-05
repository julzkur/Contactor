import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateContact from "@/app/components/CreateContact";

const DisplayEditContact = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <CreateContact navigation={navigation} />
    </View>
  );
};

export default DisplayEditContact;
