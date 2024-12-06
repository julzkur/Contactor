import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  backButton: {
    position: "absolute",
    bottom: 20, // 20px from the bottom of the container
    right: 20,  // 20px from the right side of the container
    padding: 0,
    backgroundColor: '#0096c7',
    borderRadius: 20,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10, // Ensure it's above other elements
  }
});

export default styles;
