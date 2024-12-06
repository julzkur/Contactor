import React, { useState } from 'react';
import { View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Header from "../Header";
import SaveButton from '../SaveButton';
import Contact from '@/app/models/contact';
import * as ImagePicker from 'expo-image-picker';

interface EditContactProps {
  contact: Contact;
  navigation: any;
}

const EditContact: React.FC<EditContactProps> = ( {contact, navigation} ) => {
  
  const [name, setName] = useState(contact.name);
  const [phoneNumber, setPhoneNumber] = useState(contact.phoneNumber);
  const [thumbnail, setThumbnail] = useState(contact.thumbnail);

  const pickImage = async () => {
    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setThumbnail(result.assets[0].uri); 
    }
  };

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
        <View style={styles.imagePickerContainer}>
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} style={styles.imagePreview} />
          ) : (
            <Text>No image selected</Text>
          )}

          <TouchableOpacity style={styles.uploadbutton} onPress={pickImage}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>

        <SaveButton
        contact={updatedContact}
        navigation={navigation}
      />
      </View>
    );
  };

export default EditContact;
