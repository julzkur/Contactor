import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import EditContact from "@/app/components/EditContact";


const DisplayEditContact = () => {
  return (
    <View style={styles.container} >
    <EditContact />
    </View>
  );
};

export default DisplayEditContact;
