import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  header: {
    flex: 0.2,
    marginBottom: 20,
    marginTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    flex: 0.5,
    justifyContent: "center",
  },
  content: {
    justifyContent: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    flex: 1,
    width: 320,
    height: '100%',
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 50,
    padding: 18,
    marginVertical: 6,
    fontWeight: "bold",
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  img: {
    color: "#4A4A4A",
    marginBottom: 5,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "800",
    color: "#4A4A4A",
    textAlign: "center",
  },
  gradient: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  leftText: {
    color: "#484848",
    fontSize: 18,
    marginTop: 10,
  },
  rigthText: {
    color: "#ff69b4",
    fontSize: 18,
    marginTop: 10,
    marginLeft: 8,
  },
});

export default styles;
