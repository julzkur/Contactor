import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import EditContact from "@/app/components/EditContact";


const DisplayEditContact = ({ navigation, contactId }: any) => {
  return (
    <View style={styles.container} >
      <EditContact navigation={navigation} contactId={contactId}/>
    </View>
  );
};

export default DisplayEditContact;
