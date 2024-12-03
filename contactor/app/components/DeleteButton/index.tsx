import React from "react";
import { Text } from "react-native";
import styles from "./styles";

export const deleteButton = () => {
    
    const deleteContact = ""; //Missing the functunality

    return (
        <button style={styles.button}>
            <Text style={styles.buttonText}>Delete</Text>
        </button>
    )
};

export default deleteButton;