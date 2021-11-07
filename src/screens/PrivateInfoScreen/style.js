import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 12,
  },
  maskedView: {
    minHeight: 60,
    justifyContent: "center",
  },
  trendix: {
    fontFamily: "KalamRegular",
    fontSize: 40,
    flex: 1,
  },
  screen: {
    display: "flex",
    height: "95%",
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  info: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 30,
    padding: 18,
    marginVertical: 6,
    fontWeight: "bold",
    width: 350,
  },
  text: {
    fontSize: 20,
    fontFamily: "JuaRegular",
    paddingLeft: 15,
    paddingTop: 18,
  },
  img: {
    height: 300,
    borderRadius: 50,
  },
});

export default styles;
