import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({

  item: {
    padding: 19,
    marginVertical: 15,
    marginHorizontal: 16,
    marginLeft : 13,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    justifyContent: 'center',
    width: 150,
    height: 80,
    alignItems: 'center',
    marginRight: 11,
    shadowColor: 'cadetblue',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor : "#fff"
  },
  title: {
    fontSize: 24,
    fontFamily : 'JuaRegular'
  }
});

export default styles;