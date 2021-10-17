import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({

  item: {
    padding: 19,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft : 13,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    justifyContent: 'center',
    width: 150,
    height: 170,
    alignItems: 'center',
    marginRight: 11,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    backgroundColor : "#fff"
  },
  title: {
    fontSize: 24,
  }
});

export default styles;