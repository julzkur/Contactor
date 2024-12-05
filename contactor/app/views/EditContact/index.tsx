import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import EditContact from "@/app/components/EditContact";


const DisplayEditContact: React.FC<{navigation: any, contactId:string}> = ({navigation, contactId}) => {
  return (
    <View style={styles.container} >
      <EditContact navigation={navigation} contactId={contactId}/>
    </View>
  );
};

export default DisplayEditContact;
