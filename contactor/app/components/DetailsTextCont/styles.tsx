import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        justifyContent: 'center', 
        padding: 20,
        marginVertical: 10,
        width: '80%', 
        height: 50, 
        backgroundColor: "#f0f0f0",
        borderRadius: 12,
        elevation: 3, 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      text: {
        fontSize: 18,
        color: "#333",
        position: 'absolute',
        marginLeft: 12,
      },
});

export default styles;