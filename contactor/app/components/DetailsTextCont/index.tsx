import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface DetailsProps {
    text: string;
}

const DetailsTextContainer: React.FC<DetailsProps> = ({text}) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
    </View>
    )
}

export default DetailsTextContainer;
