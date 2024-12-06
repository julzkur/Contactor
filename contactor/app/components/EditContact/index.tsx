import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';
import Header from "../Header";
import SaveButton from '../SaveButton';
import Contact from '@/app/models/contact';

interface EditContactProps {
  contact: Contact;
  navigation: any;
}

const EditContact: React.FC<EditContactProps> = ( {contact, navigation} ) => {
  
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [thumbnail, setThumbnail] = useState(contact.thumbnail);

  const updatedContact = {
    ...contact, // Retain the original `id` and any other fields
    name,
    phoneNumber,
    thumbnail,
  };

    return (
      <View style={styles.container}>
        <Header title="Edit Contact" navigation={navigation}/>
        <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
        />
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          placeholder="Thumbnail"
          style={styles.input}
          value={thumbnail}
          onChangeText={setThumbnail}
        />
        <SaveButton
        contact={updatedContact}
        navigation={navigation}
      />
      </View>
    );
  };

export default EditContact;
