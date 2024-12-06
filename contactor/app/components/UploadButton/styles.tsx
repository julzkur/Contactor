import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  uploadbutton: {
    width: 80,
    height: 60,
    backgroundColor: "#0096c7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  imagePickerContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  imagePickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  
});

export default styles;
