/* External dependencies */
import React, { useState, useCallback } from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Text,
  FlatList,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CommonActions } from '@react-navigation/routers';

/* Internal dependencies */
import styles from './style.js';
import AddButton from 'components/AddButton/AddButton';
import BottomSheet from 'components/BottomSheet/BottomSheet';
import { createPrivateArticleAPI } from '../../api/privateAPI.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { background } from 'styled-system';
import { backgroundColor } from 'styled-system';
function AddItemScreen({ route, navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const routeText = route.params.text;
  const [content, setContent] = useState(routeText);
  const screenType = route.params.screenType;
  const apiType = route.params.apiType;
  const isPublic = screenType == 'public';
  const onCreate = route.params.onCreate;
  const [hashItem, setHashItem] = useState([]);
  const [hash, setHash] = useState(null);

  const pressButton = () => {
    setModalVisible(true);
  };
  const addItem = () => {
    if (hash == '') {
      alert('텍스트를 입력하세요.');
    } else {
      let data = new Object();
      data.text = hash;
      hashItem.push(data);
      setHashItem([...hashItem]);
      setHash(null);
    }
  };
  const deleteItem = () => {
    const item = hashItem.splice(0, 1);
    console.log(item);
    setHashItem([...hashItem]);
  };
  const saveText = () => {
    if (!isPublic) {
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
  const Item = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={styles.hashItem}
        onPress={deleteItem}
        activeOpacity={0.3}
      >
        <Text style={styles.text}>{item.text}</Text>
        <Entypo
          style={styles.icon}
          name="cross"
          size={22}
          color="red"
          onPress={() => {}}
        />
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item, index }) => {
    return Item({ item, index });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          {isPublic ? (
            <TextInput
              style={styles.editTitle}
              maxLength={30}
              placeholder="제목을 입력해주세요"
            />
          ) : null}
          {isPublic ? (
            <TextInput
              style={styles.editText}
              multiline={true}
              value={content}
              editable={true}
              placeholder="텍스트를 입력해주세요"
              onChangeText={(text) => setContent(text)}
            />
          ) : (
            <TextInput
              style={styles.edit}
              multiline={true}
              value={content}
              editable={true}
              placeholder="텍스트를 입력해주세요"
              onChangeText={(text) => setContent(text)}
            />
          )}
          <View style={styles.containerRow}>
            {isPublic ? (
              <TextInput
                style={styles.editHash}
                placeholder="해쉬태그를 입력해주세요.(ex#소설#감동적인)"
                value={hash}
                onChangeText={(txt) => setHash(txt)}
              />
            ) : null}
            {isPublic ? (
              <TouchableOpacity style={styles.btnHash} onPress={addItem}>
                <Text style={styles.text}>추가</Text>
              </TouchableOpacity>
            ) : null}
          </View>
          {isPublic ? (
            <FlatList
              style={styles.list}
              data={hashItem}
              renderItem={renderItem}
              keyExtractor={(item, index) => item + index}
              horizontal={true}
              nestedScrollEnabled={true}
            />
          ) : null}
          <View style={styles.caution}>
            {isPublic ? (
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
                {'\n'}▷ 본 콘텐츠를 저작권법에 어긋나는 용도로 {'\n'}사용하실
                경우 사전 고지 없이 수정/삭제되며, {'\n'}이에 응하는 처벌을 받을
                수 있으니{'\n'} 유의해주세요.
              </Text>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
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
  );
}

export default AddItemScreen;
