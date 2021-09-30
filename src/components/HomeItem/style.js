import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 16,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    marginLeft : 13,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    width: 150,
    height: 170,
    alignItems: 'center',
    marginRight: 11
  },
  title: {
    fontSize: 24,
    textAlign: "center"
  },
  row: {
    justifyContent: 'space-between'
  }
});

export default styles;