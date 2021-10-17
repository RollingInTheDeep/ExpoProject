import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
    },
    background: {
        flex: 1,
    },
    bottomSheetContainer: {
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    btn : {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      width: '100%',
      height: 35,
      alignItems: "center",
      backgroundColor: 'white',
      opacity: 0.6,
      shadowColor: "#000",
      shadowOffset: {
	    width: 0,
	    height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    elevation: 5,
    },
    text:{
      fontSize: 23,
      marginTop: 5
    },
    item:{
      flex:1,
      alignContent:'center',
      alignItems:'center'
    },
    row: {
      justifyContent: "space-between",
    }
})

export default styles;