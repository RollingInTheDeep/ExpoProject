import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
    height,
    width,
    backgroundColor: "black",
  },
});

export default styles;
