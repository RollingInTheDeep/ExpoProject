import React, { useEffect, useRef, useState } from "react";
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
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./style.js";
import { style } from "styled-system";

const PublicBottomSheet = (props) => {
  const { modalVisible, setModalVisible } = props;
  const screenHeight = Dimensions.get("screen").height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const [itemList, setItemList] = useState([]);
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });
  const ItemList = [
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "습지는 늪이 아니다. 습지는 빛의 공간이다. Trendix는 그저 빛이다.",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "델리아 오언스 완전 팬이에요ㅠㅠ 저도 꼭 읽어봐야겠어요",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "책 이름이 이쁘네요.. 우리 딸 추천해줘야겠어요..",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "자신의 한 조각을 포기하는 일 쉽지 않은 일인데 용감해요.",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "감성적인 글귀를 보고싶었는데 딱 제가 찾던 소설이네요ㅠㅠ 감사합니다.",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "저는 개인적으로 이 작가가 너무 좋아요. 그 특유의 감성이 짙은 거 같아요..",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "혹시 다른 책도 추천해주실 수 있을까요?",
    },
    {
      nickName: "불편러",
      img: "'../../../assets/M.png",
      text: "연약하지만 그만큼 또 강한 꼬마 카야가 생각나네요.",
    },
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
              source={require("../../../assets/M.png")}
              style={styles.profile}
            />
            <Text style={styles.replyText}>{item.nickName}</Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.headerText}>{item.text}</Text>
          </View>
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
    if (content == "") {
      alert("텍스트를 입력하세요.");
    } else {
      let data = new Object();
      data.text = content;
      data.nickName = "다윤";
      itemList.unshift(data);
      setItemList([...itemList]);
      setContent(null);
    }
  };
  return (
    <KeyboardAwareScrollView>
      <Modal
        visible={modalVisible}
        animationType={"fade"}
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
                    source={require("../../../assets/M.png")}
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
