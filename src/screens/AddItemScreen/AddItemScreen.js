/* External dependencies */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { CommonActions } from '@react-navigation/routers';

/* Internal dependencies */
import styles from './style.js';
import AddButton from 'components/AddButton/AddButton';
import BottomSheet from 'components/BottomSheet/BottomSheet';
import { createPrivateArticleAPI } from '../../api/privateAPI.js';
function AddItemScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const routeText = route.params.text;
  const [content, setContent] = useState(routeText);
  const screenType = route.params.screenType;
  const apiType = route.params.apiType;

  const onCreate = route.params.onCreate;

  const pressButton = () => {
    setModalVisible(true);
  };

  const saveText = () => {
    if (screenType == 'private') {
      apiType == 'post'
        ? createPrivateArticleAPI({ folderId: 1, content: content })
            .then((res) => {
              onCreate();
            })
            .then((res) => {
              navigation.dispatch(CommonActions.goBack());
            })
        : null;
    } else {
      if (apiType == 'share') {
        // public post
      } else {
        // private update
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {screenType == 'public' ? (
          <TextInput
            style={styles.editTitle}
            maxLength={30}
            placeholder="제목을 입력해주세요"
          />
        ) : null}
        <View style={styles.editText}>
          <TextInput
            style={styles.edit}
            multiline={true}
            value={content}
            editable={true}
            placeholder="텍스트를 입력해주세요"
            onChangeText={(text) => setContent(text)}
          />
        </View>
        <View style={styles.caution}>
          {screenType == 'public' ? (
            <Text style={styles.text}>
              ※작성 시 유의사항※{'\n'}
              {'\n'}▷ 본 콘텐츠를 저작권법에 어긋나는 용도로 사용하실 경우{' '}
              {'\n'}
              사전고지 없이 수정/삭제되며, 이에 응하는{'\n'} 처벌을 받을 수
              있으니 유의해주세요.{'\n'}
              {'\n'}▷ 타인에게 불쾌감을 주는 비속어, 욕설 등은 삼가주세요.
            </Text>
          ) : (
            <Text style={styles.text}>
              ※작성 시 유의사항※{'\n'}
              {'\n'}▷ 본 콘텐츠를 저작권법에 어긋나는 용도로 {'\n'}사용하실 경우
              사전 고지 없이 수정/삭제되며, {'\n'}이에 응하는 처벌을 받을 수
              있으니{'\n'} 유의해주세요.
            </Text>
          )}
        </View>
        <View style={styles.btnAdd}>
          <AddButton
            onPress={screenType == 'textSelection' ? pressButton : saveText}
            screenType={screenType}
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
