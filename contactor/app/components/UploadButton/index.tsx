import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface ImageUploadProps {
  onImagePicked: (uri: string) => void;
  existingImageUri?: string; 
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImagePicked, existingImageUri }) => {
  const [photoURL, setPhotoURL] = useState(existingImageUri || '');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setPhotoURL(uri); 
      onImagePicked(uri);
    }
  };

  return (
    <View style={styles.imagePickerContainer}>
      {photoURL ? (
        <Image source={{ uri: photoURL }} style={styles.imagePreview} />
      ) : (
        <Text>No image selected</Text>
      )}

      <TouchableOpacity style={styles.uploadbutton} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;
