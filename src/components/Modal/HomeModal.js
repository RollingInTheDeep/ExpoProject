import React from "react";
import { Dimensions, View } from "react-native";
import Modal from "react-native-modal";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const HomeModal = ({ show, onClose, children }) => {
  return (
    <Modal
      isVisible={show}
      onBackdropPress={onClose}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <View style={{ flex: 0.7 }}>{children}</View>
    </Modal>
  );
};

export default HomeModal;
