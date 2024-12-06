import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from './styles';
import SaveNewContact from '../SaveNewContactButton.tsx';
import UploadButton from '../UploadButton';

const CreateContact: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [photoURL, setPhotoURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const handleImagePicked = (uri: string) => {
    setPhotoURL(uri);
    setThumbnail(uri); 
  };

  const contact = {
    name,
    phoneNumber,
    thumbnail: photoURL || thumbnail,
  };

  return (
    <View style={styles.container}>
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
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
          placeholder="URL"
          style={styles.input}
          value={thumbnail}
          onChangeText={setThumbnail}
        />

      <UploadButton onImagePicked={handleImagePicked} existingImageUri={photoURL} />

      <SaveNewContact contact={contact} navigation={navigation}/>

    </View>
  );
};

export default CreateContact;
