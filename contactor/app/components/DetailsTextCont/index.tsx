import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const DetailsTextContainer: React.FC<{text: string}> = ({text}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
    )
}

export default DetailsTextContainer;
