import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import { deleteButton } from "@/app/components/DeleteButton";
import { editButton } from "@/app/components/EditButton"; // ætti edit og delete takkinn ekki að vera í contact component, ekki view?:)) - Julia
import { ContactService } from "@/app/services/ContactService";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/app/routes";

type ContactScreenRouteProp = RouteProp<RootStackParamList, "Contact">;

interface ContactViewProps {
  route: ContactScreenRouteProp;      //need to change so it imports from Services, not directly from Routes.
}

// Also most of this logic should be in its own Contact components, like ContactDetails or something :)) and then the view
// just fetches that component and displays, so view only talks to that component, and the component handles talking
// to Services and stuff

// in Header I want the name of the contact to show, so that is missing OK

const ContactView: React.FC<ContactViewProps> = ({ route }) => {

  const { contact } = route.params; 
  
  return (
    <View style={styles.container}>
        <Header title={contact.name}/> {/*header now shows contact name*/}
        <div>
            <Image source={{ uri: contact.thumbnail }} style={styles.contactPhoto}/>
        </div>
        <div>
            <Text style={styles.nameText}>{contact.name}</Text>
        </div>
        <div>
            <Text style={styles.phoneNumber}>{contact.phoneNumber}</Text>
        </div>
    </View>
  )
}

export default ContactView;