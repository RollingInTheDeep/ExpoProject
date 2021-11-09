/* External dependencies */
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
} from "react-native";
import { CommonActions } from "@react-navigation/routers";
import Icon from "react-native-vector-icons/AntDesign";

/* Internal dependencies */
import HomeItem from "components/HomeItem/HomeItem";
import styles from "./style.js";
import useFolder from "../../hooks/useFolder";

const BottomSheet = (props) => {
  const { modalVisible, setModalVisible } = props;
  const { folderList, onCreate, onRemove } = useFolder({ userId: 6 });
  const screenHeight = Dimensions.get("screen").height;
  const [change, setChange] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const panY = useRef(new Animated.Value(screenHeight)).current;

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

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

  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
  };
  const onPress = () => {
    alert("선택하신 폴더에 저장됩니다.");
    console.log(selectedItem[0]);
    props.saveText(selectedItem[0]);
    props.navigation.dispatch(
      CommonActions.navigate({
        name: "HomeStack",
      })
    );
    setModalVisible(false);
  };
  const getSelectedItem = (item) => {
    setSelectedItem(item);
    change ? setChange(false) : setChange(true);
  };
  return (
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
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.btn}
            onPress={onPress}
          >
            <Icon name="check" size={40} color="#000" style={styles.text} />
          </TouchableOpacity>
          <FlatList
            data={folderList}
            renderItem={({ item }) => {
              const backgroundColor = selectedItem.includes(item.folderId)
                ? "#660099"
                : "#ffffff";
              const color = selectedItem.includes(item.folderId)
                ? "white"
                : "black";
              return (
                <HomeItem
                  item={item}
                  backgroundColor={{ backgroundColor }}
                  textColor={{ color }}
                  selectedItem={selectedItem}
                  getSelectedItem={getSelectedItem}
                  screenType="AddItemScreen"
                />
              );
            }}
            keyExtractor={(item, index) => item + index}
            numColumns={2}
            extraData={change}
            columnWrapperStyle={styles.row}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomSheet;
