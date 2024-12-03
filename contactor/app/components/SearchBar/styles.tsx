import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: '#fff',
      },
      input: {
        flex: 1,
        height: 40,
        fontSize: 16,
      },
      clearButton: {
        padding: 5,
      },
      clearText: {
        fontSize: 18,
        color: '#888',
      },
  });
  
export default styles;