import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        width: 90,
        height: 60,
        backgroundColor: '#dd2525',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginVertical: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});

export default styles;