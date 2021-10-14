import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'coulmn'
  },
  editText: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 4,
    padding: 10,
    borderStyle: "solid",
    borderColor: '#a4c07e',
    fontSize: 24, 
  },
  editTitle: {
    flex: 0.1,
    borderBottomWidth: 0,
    borderStyle: "solid",
    borderColor: '#a4c07e',
    borderWidth: 4,
    padding: 10,
    fontSize: 26,
  },
  caution: {
    flex: 0.7,
  },
  btnAdd: {
    flex: 0.2,
  },

});

export default styles;