import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  ContactList: undefined;
  Contact: undefined;
  CreateContact: undefined;
  EditContact: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

import ContactListView from "../views/ContactList";

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="ContactList"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ContactList" component={ContactListView} />
    </Stack.Navigator>
  );
};

export default Routes;
