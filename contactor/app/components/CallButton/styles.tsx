import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    callButton: {
      width: 90,
      height: 90,
      backgroundColor: '#4CAF50',
      padding: 30,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    callButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default styles;
