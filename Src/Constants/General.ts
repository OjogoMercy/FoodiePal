import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
const general = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 31,
    color: Colors.white,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: Colors.main,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
  conver: {
    padding: 20,
  },
  burger: {
    width:260,
    height: 260,
    marginTop: 20,
    alignSelf: "center",
  },
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default general;
