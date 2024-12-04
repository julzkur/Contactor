import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import EditContact from "@/app/components/EditContact";


const DisplayEditContact: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <View style={styles.container} >
      <EditContact nagivation={navigation}/>
    </View>
  );
};

export default DisplayEditContact;
