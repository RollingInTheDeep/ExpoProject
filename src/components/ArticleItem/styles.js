import {
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  card: {
    marginBottom: '2%',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#fff",
  },
  container: {
    alignItems: "center",
    flex: 1,
    height: '100%',
    justifyContent: "center",
    padding: 15,
    marginVertical: 8,
    marginHorizontal:3,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#8977AD",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  btn: {
    position: "absolute",
    left: 50,
  },
  container1: {
    flexDirection: "row",
    marginBottom: 10,
  },
  container2: {
    flex: 1
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'JuaRegular'
  },
  readMore: {
    marginTop: 5,
  },
  showLess: {
    marginTop: 5,
  },
});

export default styles;