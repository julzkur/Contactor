import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { ContactService } from '@/app/services/ContactService'

const DebugScreen = () => {
  const contactService = new ContactService();

  const handleReset = async () => {
    await contactService.resetDirectory();
    console.log("Contacts directory reset.");
  };

  return (
    <View>
      <Button title="Reset Contacts Directory" onPress={handleReset} />
    </View>
  );
};

export default DebugScreen;

