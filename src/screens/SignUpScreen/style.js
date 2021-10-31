import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    display:"flex",
    height: '100%',
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
  },
  header: {
    marginBottom: 20,
    marginTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  all: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 13,
    maxHeight: 400,
    height: '100%',
  },
  masked:{
    alignItems:"stretch",
    minHeight: 20,
    marginVertical: 8,
  },
  input: {
    borderWidth: 0.5,
    borderColor: "#D3D3D3",
    borderRadius: 50,
    padding: 18,
    marginVertical: 6,
    fontWeight: "bold",
    width: 300
  },
  textRow: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 8,
  },
  profile:{
    alignSelf:"center",
    alignItems: "center",
    justifyContent: "center",
    width: 200, 
    height: 200, 
    borderRadius: 100,
    borderColor: "#D060FB",
    borderWidth: 2,
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
    fontFamily : 'JuaRegular'
  },
  gradient: {
    marginTop: 20,
    marginBottom: 10,
    width: 200,
    height: 50
  },
  text: {
    fontSize: 20,
    fontFamily : 'JuaRegular',
    textAlign:"center"
  }
});

export default styles;
