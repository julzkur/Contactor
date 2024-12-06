import React from "react";
import { View, Text, TouchableOpacity, TextStyle } from "react-native";
import styles from "./styles";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  navigation: any;
  titleStyle?: TextStyle;
}

const Header: React.FC<HeaderProps> = ({ title, navigation, showBackButton = true, titleStyle }) => {
  
  return (
    <View style={styles.container}>
      {showBackButton && (
      <TouchableOpacity onPress={() => navigation.navigate("ContactList")} style={styles.backButton}>
        <Text style={styles.backButtonText}>{"<"}</Text>
      </TouchableOpacity>
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default Header;
