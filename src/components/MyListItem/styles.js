import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: '100%',
    justifyContent: "center",
    padding: 25,
    marginVertical: 3,
    borderWidth: 2,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#1B7357",
  },
  title:{
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
  },
  container1:{
    flex: 1,
    alignItems: "center"
  },
  container2:{
    flex: 1
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  readMore: {
    marginTop: 5,
  },
  showLess: {
    marginTop: 5,
  },
});

export default styles;
