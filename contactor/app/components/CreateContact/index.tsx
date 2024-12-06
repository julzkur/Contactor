import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import Header from "../Header";
import { ContactService } from '@/app/services/ContactService';

const CreateContact: React.FC<{ navigation: any }> = ({ navigation }) => {
  const contactService = new ContactService();

  const [photoURL, setPhotoURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');

  const pickImage = async () => {
    // Launch image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoURL(result.assets[0].uri); // Set the selected image URI
    }
  };

  const takePhoto = async () => {
    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoURL(result.assets[0].uri); // Set the captured image URI
    }
  };

  return (
    <View style={styles.container}>
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

      <Text style={styles.label}>Photo:</Text>
      <View style={styles.imagePickerContainer}>
        {photoURL ? (
          <Image source={{ uri: photoURL }} style={styles.imagePreview} />
        ) : (
          <Text>No image selected</Text>
        )}

        <View style={styles.imagePickerButtons}>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const asyncResult = contactService.createContact(name, phoneNumber, photoURL);
          asyncResult
            .then((result) => {
              console.log('Result:', result);
            })
            .catch((error) => {
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
