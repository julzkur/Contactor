import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Contact from '../models/contact';
import ContactListView from '../views/ContactList';
import ContactView from '../views/Contact';
import DisplayEditContact from '../views/EditContact';
import CreateContact from '../views/CreateContact';


export type RootStackParamList = {
    ContactList: undefined;
    Contact: { contact: Contact };
    CreateContact: undefined; 
    EditContact: { contact: Contact };
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="ContactList" component={ContactListView} />
      <Stack.Screen 
        name="Contact" 
        component={ContactView}
        options={{ title: 'Contact Details' }} 
      /> 
      <Stack.Screen name="EditContact" component={DisplayEditContact}/>
      <Stack.Screen name="CreateContact" component={CreateContact} />
      
    </Stack.Navigator>
  );
};

export default Routes;
