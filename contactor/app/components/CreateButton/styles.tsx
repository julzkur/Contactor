import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backButtonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    backButton: {
        position: "absolute",
        top: 10, // Directly sets the distance from the top
        left: 20, // Maintain horizontal alignment
        padding: 0,
        backgroundColor: '#90e0ef',
        borderRadius: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
