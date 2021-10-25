/* External dependencies */
import React, { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { CommonActions } from "@react-navigation/routers";

/* Internal dependencies */
import styles from "./style.js";
import AddButton from "components/AddButton/AddButton";
import BottomSheet from "components/BottomSheet/BottomSheet";
import { createPrivateArticleAPI } from "../../api/privateAPI.js";

function AddItemScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [content, setContent] = useState(null);
  const screenType = route.params.screenType;
  const apiType = route.params.apiType;
  const routeText = route.params.text;
  const onCreate = route.params.onCreate;
  const pressButton = () => {
    setModalVisible(true);
  };

  const saveText = () => {
    if (screenType == "private") {
      apiType == "post"
        ? createPrivateArticleAPI({ folderId: 1, content: content })
            .then((res) => {
              onCreate();
            })
            .then((res) => {
              navigation.dispatch(CommonActions.goBack());
            })
        : null;
    } else {
      if (apiType == "share") {
        // public post
      } else {
        // private update
      }
    }
  };

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
          multiline={true}
          value={routeText}
          placeholder="텍스트를 입력해주세요"
          onChangeText={(text) => setContent(text)}
        />
        <View style={styles.caution} />
        <View style={styles.btnAdd}>
          <AddButton
            onPress={screenType == "textSelection" ? pressButton : saveText}
          />
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
