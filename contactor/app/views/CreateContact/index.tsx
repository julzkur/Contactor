import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import CreateContact from "@/app/components/CreateContact";

const DisplayEditContact: React.FC = () => {
  return (
    <View style={styles.container}>
      <CreateContact />
    </View>
  );
};

export default DisplayEditContact;
