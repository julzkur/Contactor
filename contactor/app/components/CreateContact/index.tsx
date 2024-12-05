import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Header from "../Header";

interface CreateContactProps {
  navigation: any; // Add navigation as a prop
}

const CreateContact: React.FC<CreateContactProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      

      <Text style={styles.label}>Name:</Text>
      <TextInput placeholder="Enter name" style={styles.input} />
      
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput placeholder="Enter phone number" style={styles.input} />
      
      <Text style={styles.label}>Photo URL:</Text>
      <TextInput placeholder="Enter photo URL" style={styles.input} />
      
      {/* Go Back Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateContact;
