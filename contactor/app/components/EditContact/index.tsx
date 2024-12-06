import React from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Header from "../Header";
import { ContactService } from '@/app/services/ContactService';

const EditContact: React.FC<{ navigation: any, contactId:string }> = ({ navigation, contactId }) => {
  const contactService = new ContactService();

  const [thumbnail, setThumbnail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  
    return (
      <View style={styles.container}>
        <Header title="Contacts" navigation={navigation}/>
        <TextInput 
        placeholder="Name" 
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        />
        <TextInput 
        placeholder="Phone Number" 
        style={styles.input} 
        value={phoneNumber}
        onChangeText={(text) => setName(text)}
        />
        <TextInput 
        placeholder="Thumbnail" 
        style={styles.input} 
        value={thumbnail}
        onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          const asyncResult = contactService.editContact(contactId, name, phoneNumber, thumbnail);
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

export default EditContact;
