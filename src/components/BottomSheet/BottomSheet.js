import React, { useEffect, useRef } from 'react';
import {
    View,
    Modal,
    Animated,
    TouchableWithoutFeedback,
    Dimensions,
    PanResponder, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeItem from "components/HomeItem/HomeItem"
import styles from "./style.js";

const BottomSheet = (props) => {
    const { modalVisible, setModalVisible } = props;
    const screenHeight = Dimensions.get("screen").height;
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

    const panResponders = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderMove: (event, gestureState) => {
            panY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (event, gestureState) => {
            if(gestureState.dy > 0 && gestureState.vy > 1.5) {
                closeModal();
            }
            else {
                resetBottomSheet.start();
            }
        }
    })).current;

    useEffect(()=>{
        if(props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props]);

    const closeModal = () => {
        closeBottomSheet.start(()=>{
            setModalVisible(false);
        })
    }
    const onPress = () => {
      alert("선택하신 폴더에 저장됩니다.");
      setModalVisible(false);
    }
return (
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent>
            <View style={styles.overlay}>
                <TouchableWithoutFeedback
                    onPress={closeModal}>
                 <View style={styles.background}/>
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{...styles.bottomSheetContainer, transform: [{ translateY: translateY }]}}
                    {...panResponders.panHandlers}>
                          <TouchableOpacity activeOpacity={0.8} style = {styles.btn} onPress = {onPress}>
                              <Icon name="check" size={40} color="#2f4f4f" style = {styles.text} />
                          </TouchableOpacity>
                    <HomeItem style = {styles.item}/> 
                </Animated.View>
            </View>
        </Modal>
    )
}


export default BottomSheet;