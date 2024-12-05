import { TextInput } from "react-native";
import styles from "./styles";

import { ContactService } from "@/app/services/ContactService";

interface TextInputInterface {
  placeholder:string,
  
}

const DisplayCreateContact: React.FC<TextInputInterface> = ({ placeholder }) => {
  /* 
  style={styles.input}
  value={name}
  onChangeText={setName}
  */
  return (
      <TextInput
      style={[styles.textInputWrapper, ]}
      placeholder={placeholder}
      >

      </TextInput>
  );
}; 

export default DisplayCreateContact;