import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { Linking } from 'react-native';
import styles from "./styles";

interface CallButtonProps {
  phoneNumber: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  const makeCall = (phoneNumber: string) => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Phone number is not available.');
      return;
    }

    const phoneUrl = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(phoneUrl);
        } else {
          Alert.alert('Error', 'Unable to open phone dialer.');
        }
      })
      .catch((error) => console.error('Error opening phone dialer:', error));
  };

  return (
    <TouchableOpacity
      style={styles.callButton}
      onPress={() => makeCall(phoneNumber)}
    >
      <Text style={styles.callButtonText}>Call</Text>
    </TouchableOpacity>
  );
};



export default CallButton;
