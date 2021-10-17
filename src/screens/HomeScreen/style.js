import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#fff",
  },
  deleteButton: {
    alignItems: "flex-end",
  },
  deleteText: {
    margin: 3,
    marginRight: 7,
    fontSize: 20,
    color: "red",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    resizeMode: "cover",
    backgroundColor: "#bce7d6",
  },
  btn: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    resizeMode: "cover",
    backgroundColor: "#bce7d6",
    width: 50,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    fontWeight: "normal",
    fontSize: 18,
    color: "white",
  },
  keybordContainer: {
    flex: 1,
  },
  centeredView: {
    flex: 0.7,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: 150,
    height: 170,
    justifyContent: "space-around",
    backgroundColor: "white",
    padding: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#bce7d6",
    fontSize: 24,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 30,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "#bce7d6",
  },
  modalText: {
    flex: 0.1,
    marginBottom: 15,
    justifyContent: "space-around",
    textAlign: "center",
    color: "#bdcebe",
    fontWeight: "bold",
    fontSize: 26,
  },
  row: {
    justifyContent: "space-between",
  }
});

export default styles;
