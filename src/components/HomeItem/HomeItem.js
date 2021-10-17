import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CommonActions } from "@react-navigation/routers";
import styles from "./style";


const HomeItem = (props) => {

  const deleteFolder = () => {
    try{
      props.selectedItem.includes(props.item.folderId) ? props.selectedItem.splice(props.selectedItem.indexOf(props.item.folderId), 1)
      : props.selectedItem.push(props.item.folderId);
      props.getSelectedItem(props.selectedItem);
      console.log("렌더링 아이템" + props.backgroundColor);
    }catch(err){
      console.log(err);
    }
  }
  const saveText = () =>{
    try{
      props.selectedItem.includes(props.item.folderId) ? props.selectedItem.splice(props.selectedItem.indexOf(props.item.folderId), 1)
      : props.selectedItem.push(props.item.folderId);
      props.getSelectedItem(props.selectedItem);
    }catch(err){
      console.log(err);
    }
  }
  const switchPrivate = () =>{
    props.navigation.dispatch(CommonActions.navigate({ name: "PrivateStack" }));
  }
  return (
      <TouchableOpacity
       style={[styles.item, props.backgroundColor]}
        onPress={() => {
          (props.screenType == "HomeScreen" && !props.isDelete ? switchPrivate() : 
          (props.screenType !== "AddItemScreen"  && props.isDelete ? deleteFolder() :saveText()))
        }}
      >
        <Text style={[styles.title, props.textColor]}>{props.item.name}</Text>
      </TouchableOpacity>
  );
  
}

const areEqual = (prevProps, nextProps) => {
 return prevProps.backgroundColor === nextProps.backgroundColor;
}

export default React.memo(HomeItem, areEqual);
