import React from "react";
import { View, Alert, Button } from "react-native";
import { ContactService } from "@/app/services/ContactService";

export const ResetButton: React.FC<{ refreshDirectory: () => void }> = ({ refreshDirectory }) => {

    const service = new ContactService();

    const handleReset = async () => {
        Alert.alert(
          "Reset Directory",
          "Are you sure you want to reset? App restart required after reset",
          [
            { text: "Cancel", style: "cancel" },
            {
              text: "Reset", 
              style: "destructive", 
              onPress: async () => {
                await service.resetDirectory();
                refreshDirectory();
                console.log("Contacts directory reset.");
              }
            },
          ]
        );
      };

      return (
        <View>
            <Button title="Reset Contacts Directory" onPress={handleReset} />
        </View>
      );

}

export default ResetButton;