import React, { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./style.js";
import AddButton from "components/AddButton/AddButton";
import BottomSheet from "components/BottomSheet/BottomSheet";

function AddItemScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };
  const saveText = (screenType,apiType) => {
    if(screenType =="private"){
      // private post
      if(apiType=="update"){

      }else{
        // private update
      }
    }else{
     // public post
     if(apiType=="share"){

     }else{
      // private update
    }
  }
}
  const screenType = route.params.screenType;
  const apiType = route.params.apiType;
  const text = route.params.text;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {screenType == "public" ? (
          <TextInput
            style={styles.editTitle}
            maxLength="15"
            placeholder="제목을 입력해주세요"
          />
        ) : null}
        <TextInput
          style={styles.editText}
          multiline="true"
          value={text}
          placeholder="텍스트를 입력해주세요"
        />
        <View style={styles.caution} />
        <View style={styles.btnAdd}>
          <AddButton onPress={
            screenType == "textSelection"? pressButton : saveText(screenType,apiType)} />
          <BottomSheet
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AddItemScreen;