import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../models/contact';
import ContactList from '../views/ContactList';

export type RootStackParamList = {
    ContactList: undefined;
    Contact: {contact: Contact} ;
    CreateContact: undefined;
    EditContact: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{headerShown: false}}>

      <Stack.Screen name="ContactList" component={ContactList} />
      {/* <Stack.Screen 
        name="Contact" 
        component={Contact}
        options={{ title: 'Contact Details' }} 
      /> */}
    </Stack.Navigator>
  );
};

export default Routes;
