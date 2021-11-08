import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Modal,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  PanResponder,
  TouchableOpacity,
  FlatList,
  TextInput,
  Text,
  Image,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './style.js';
import { style } from 'styled-system';

const PublicBottomSheet = (props) => {
  const { modalVisible, setModalVisible } = props;
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const [itemList, setItemList] = useState([]);
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });
  const ItemList = [
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '개별로' },
    { nickName: '불편러', img: "'../../../assets/M.png", text: '안별로' },
  ];
  useEffect(() => {
    setItemList(ItemList);
  }, []);
  const [content, setContent] = useState(null);
  const count = itemList.length;
  const resetBottomSheet = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });
  const closeBottomSheet = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });
  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };

  const Item = ({ item, index }) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.item}>
          <View>
            <Image
              source={require('../../../assets/M.png')}
              style={styles.profile}
            />
            <Text style={styles.replyText}>{item.nickName}</Text>
          </View>
          <Text style={styles.headerText}>{item.text}</Text>
          <Text style={styles.date}>2021-11-08</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderItem = ({ item, index }) => {
    return Item({ item, index });
  };
  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeModal();
        } else {
          resetBottomSheet.start();
        }
      },
    })
  ).current;

  useEffect(() => {
    if (props.modalVisible) {
      resetBottomSheet.start();
    }
  }, [props]);

  const addItem = () => {
    if (content == '') {
      alert('텍스트를 입력하세요.');
    } else {
      let data = new Object();
      data.text = content;
      data.nickName = '다윤';
      itemList.unshift(data);
      setItemList([...itemList]);
      setContent(null);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent
        statusBarTranslucent
      >
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={styles.background} />
          </TouchableWithoutFeedback>
          <Animated.View
            style={{
              ...styles.bottomSheetContainer,
              transform: [{ translateY: translateY }],
            }}
            {...panResponders.panHandlers}
          >
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.headerText}>댓글</Text>
                <Text style={styles.headerText}>{count}</Text>
                <Entypo
                  style={styles.icon}
                  name="cross"
                  size={30}
                  color="black"
                  onPress={closeModal}
                />
              </View>
              <View style={styles.header}>
                <TouchableOpacity>
                  <Image
                    source={require('../../../assets/M.png')}
                    style={styles.profile}
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.editText}
                  value={content}
                  placeholder="댓글을 입력해주세요."
                  placeholderTextColor="#d3d3d3"
                  onChangeText={(text) => setContent(text)}
                />
                <TouchableOpacity style={styles.btnAdd} onPress={addItem}>
                  <Text style={styles.addText}>등록</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.list}>
                <FlatList
                  data={itemList}
                  renderItem={renderItem}
                  nestedScrollEnabled={true}
                  keyExtractor={(item, index) => item + index}
                />
              </View>
            </View>
          </Animated.View>
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};

export default PublicBottomSheet;
