import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import Header from "../Header";

const EditContact = () => {
    return (
      <View style={styles.container}>
        <Header title="Contacts" />
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Phone Number" style={styles.input} />
        <TextInput placeholder="Thumbnail" style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default EditContact;
