import { Text, View } from "react-native";
import { ContactListView } from "./views/ContactList";

export default function Index() {
    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            }}>
              
            <ContactListView />
        </View>
    );
}
