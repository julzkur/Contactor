import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  contactItem: {
    flexDirection: "row",
    backgroundColor: "#90e0ef",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderTopWidth: 3,
    borderColor: "#caf0f8",
    borderRadius: 20,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077b6",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#777",
  },
});

export default styles;
