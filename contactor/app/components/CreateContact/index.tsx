import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Header from "../Header";

const CreateContact: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title="Add Contact" />
      <Text style={styles.label}>Name:</Text>
      <TextInput placeholder="Enter name" style={styles.input} />
      
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput placeholder="Enter phone number" style={styles.input} />
      
      <Text style={styles.label}>Photo URL:</Text>
      <TextInput placeholder="Enter photo URL" style={styles.input} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateContact;
