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
  Text,
} from 'react-native';
import styles from './style.js';

const PublicBottomSheet = (props) => {
  const { modalVisible, setModalVisible } = props;
  const screenHeight = Dimensions.get('screen').height;
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
  const closeModal = () => {
    closeBottomSheet.start(() => {
      setModalVisible(false);
    });
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

  return (
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
          <Text>hi</Text>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default PublicBottomSheet;
