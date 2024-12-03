import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import DisplayCreateContact from "@/app/components/CreateContact";

export const CreateContactView = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <DisplayCreateContact navigation={navigation}/>
    </View>
  );

};

export default CreateContactView;
