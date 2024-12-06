import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#caf0f8", // Same background color as provided
    padding: 16, // Adding padding for spacing
  },

  input: {
    height: 50,
    backgroundColor: "#ffffff", // White background for inputs
    borderRadius: 8, // Rounded corners
    padding: 12, // Padding inside the text input
    marginVertical: 8, // Vertical spacing between inputs
    fontSize: 16, // Font size for text
    shadowColor: "#000", // Shadow for a subtle 3D effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Shadow effect on Android
  },

  button: {
    backgroundColor: "#0096c7", // Accent blue color
    paddingVertical: 12, // Vertical padding for button
    borderRadius: 8, // Rounded corners for the button
    alignItems: "center", // Center text horizontally
    marginTop: 16, // Space above the button
  },
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
    color: "#ffffff", // White text color
    fontSize: 16, // Font size for button text
    fontWeight: "bold", // Bold text for emphasis
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
