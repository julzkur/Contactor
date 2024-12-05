import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Header from "../Header";
import { ContactService } from '@/app/services/ContactService';
import { useState } from 'react';

const CreateContact: React.FC<{ navigation: any }> = ({ navigation }) => {
  const contactService = new ContactService();

  const [photoURL, setPhotoURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');


  return (
    <View style={styles.container}>
      <Header title="Add Contact" />
      <Text style={styles.label}>Name:</Text>
      <TextInput 
      placeholder="Enter name" 
      style={styles.input} 
      value={name}
      onChangeText={(text) => setName(text)}
      />
      
      <Text style={styles.label}>Phone Number:</Text>
      <TextInput 
      placeholder="Enter phone number" 
      style={styles.input} 
      value={phoneNumber}
      onChangeText={(text) => setPhoneNumber(text)}
      
      />
      
      <Text style={styles.label}>Photo URL:</Text>
      <TextInput 
      placeholder="Enter photo URL" 
      style={styles.input} 
      value={photoURL}
      onChangeText={(text) => setPhotoURL(text)} />
      
      <TouchableOpacity style={styles.button} 
      onPress={() => {
        const asyncResult = contactService.createContact(name, phoneNumber, photoURL);
        asyncResult.then(result => {
          console.log('Result:', result);
          // Use the result here
        }).catch(error => {
          console.error('Error:', error);
        });
        navigation.navigate('ContactList', { navigation });
      }}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateContact;
