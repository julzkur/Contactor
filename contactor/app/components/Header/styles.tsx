import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingTop: 10,
        justifyContent: "center",
        backgroundColor: "#caf0f8", 
        paddingLeft: 14,
        position: "relative"
    },
    title: {
        marginLeft: 50,
        fontSize: 25,
        fontWeight: "bold",
        color: "#249",
    },
    backButtonText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    backButton: {
        position: "absolute",
        margin: 10,
        marginTop: 20,
        padding: 5,
        backgroundColor: '#90e0ef',
        borderRadius: 20,
        width: 50,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });
  
export default styles;
