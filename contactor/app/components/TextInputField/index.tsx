import { TextInput } from "react-native";
import styles from "./styles";

interface TextInputInterface {
  placeholder:string,
  
}

const DisplayCreateContact: React.FC<TextInputInterface> = ({ placeholder }) => {

  return (
      <TextInput
      style={[styles.textInputWrapper, ]}
      placeholder={placeholder}
      >

      </TextInput>
  );
}; 

export default DisplayCreateContact;