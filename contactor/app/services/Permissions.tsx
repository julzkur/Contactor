import React, { useState, useEffect } from 'react';
import { View, Button, Alert, FlatList, Text } from 'react-native';
import Contacts from 'react-native-contacts';
import { PermissionsAndroid, Platform } from 'react-native';

interface Contact {
  recordID: string;
  displayName: string;
  phoneNumbers: { number: string }[];
  emails?: { email: string }[];
  thumbnailPath?: string;
}

const ImportContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    // Request permission to read contacts on Android
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS)
        .then((granted) => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            fetchContacts();
          } else {
            Alert.alert('Permission Denied', 'We need access to your contacts.');
          }
        });
    } else {
      fetchContacts();
    }
  }, []);

  const fetchContacts = () => {
    Contacts.getAllWithoutPhotos()
      .then((contactsList) => {
        setContacts(contactsList);
      })
      .catch((e) => {
        console.log('Error fetching contacts:', e);
        Alert.alert('Error', 'Could not fetch contacts');
      });
  };

  return (
    <View>
      <Button title="Import Contacts" onPress={fetchContacts} />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.recordID}
        renderItem={({ item }) => (
          <View>
            <Text>{item.displayName}</Text>
            <Text>{item.phoneNumbers[0]?.number}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ImportContacts;
