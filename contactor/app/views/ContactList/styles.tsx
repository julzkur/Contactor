import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555",
  },

  header: {
    height: 60,
    flexDirection: "row", // To position elements horizontally
    alignItems: "center", // Vertically center items
    justifyContent: "space-between", // Push items to the sides
    backgroundColor: "#caf0f8", 
    paddingHorizontal: 14, // Space on both sides
  },

  title: {
    marginLeft: 0,
    fontSize: 25,
    fontWeight: "bold",
    color: "#249",
  },

  createButton: {
    padding: 5,
    backgroundColor: "#90e0ef",
    borderRadius: 20,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;
