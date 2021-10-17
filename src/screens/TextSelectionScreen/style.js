import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    marginLeft: 13,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent:"flex-start",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    color: "#000",
  },
  firstContainer: {
    flex: 1,
    flexDirection: "column",
  },
  secondContainer: {
    flex: 0.08,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  flatList: {
    flex: 2,
    padding: 10,
  },
});

export default styles;
