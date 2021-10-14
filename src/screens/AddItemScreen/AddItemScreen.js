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

function AddItemScreen(screenType) {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {screenType === "PublicScreen" ? (
          <TextInput
            style={styles.editTitle}
            maxLength="15"
            placeholder="제목을 입력해주세요"
          />
        ) : null}
        <TextInput
          style={styles.editText}
          multiline="true"
          placeholder="텍스트를 입력해주세요"
        />
        <View style={styles.caution} />
        <View style={styles.btnAdd}>
          <AddButton onPress={pressButton} />
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
