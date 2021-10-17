import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#fff",
    padding: 20,
  },
  introScreen: {
    marginTop: 10,
    flex: 0.2,
  },
  logo: {
    flex: 1,
    height: 300,
    minWidth: '100%',
    resizeMode: "cover",
  },
  editText: {
    flex: 0.7,
    borderWidth: 1,
    width: "100%",
    height: 100,
    padding: 10,
    margin: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    borderColor: "#ddd",
    shadowColor: "#000000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    fontSize: 24,
  },
  input: {
    flex: 0.5,
    alignItems: "center",
    width: 300,
    height: 200,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 30,
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  btn: {
    flex: 1,
    marginTop: 5,
  },
  gradient: {
    marginTop: 30,
    flex: 0.5,
    width: 300,
  },
  text: {
    fontSize: 20,
  },
  leftText: {
    color: "#484848",
    fontSize: 15,
  },
  rigthText: {
    color: "#ff69b4",
    fontSize: 15,
    marginLeft: 8,
  },
});

export default styles;
