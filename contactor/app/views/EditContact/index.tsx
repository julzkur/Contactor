import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import EditContact from "@/app/components/EditContact";
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '@/app/routes';

type DisplayEditContactProps = StackScreenProps<RootStackParamList, "EditContact">;

const DisplayEditContact: React.FC<DisplayEditContactProps> = ({ route, navigation }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <EditContact contact={contact} navigation={navigation} />
    </View>
  );
};

export default DisplayEditContact;

