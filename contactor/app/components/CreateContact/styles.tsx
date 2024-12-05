import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#caf0f8",
    padding: 16,
  },

  label: {
    fontSize: 14, // Slightly smaller font for labels
    fontWeight: "500", // Semi-bold for emphasis
    color: "#333", // Dark gray for contrast
    marginBottom: 4, // Space between label and input
  },

  input: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },

  button: {
    backgroundColor: "#0096c7",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
