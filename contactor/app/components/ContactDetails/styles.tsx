import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contactPhoto: {
        backgroundColor: 'white',
        borderRadius: 100,
        width: 150,
        height: 150,
        margin: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#caf0f8",
    },
    buttons: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '80%', 
      },
});

export default styles;