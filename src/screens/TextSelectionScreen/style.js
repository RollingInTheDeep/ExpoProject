import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft : 13,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 11,
    width: 300
  },
  text:{
    fontSize: 20,
    textAlign: "center",
  },
  firstContainer:{
    flex: 1,
    flexDirection: 'coulmn'
  },
  secondContainer:{
    flex : 0.08,
    alignItems : 'center',
    alignContent:'center',
    backgroundColor: '(0, 0, 0, 0.5)',
  },
  flatList:{
    flex: 0.9
  }
});

export default styles;