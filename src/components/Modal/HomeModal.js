import Modal from 'react-native-modal';
import React from 'react';
import { View } from 'react-native'
import { Dimensions, Platform } from 'react-native'


const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

const HomeModal = ({ show, onClose, children }) => {
  return( 

  <Modal 
  isVisible={show} 
  onBackdropPress={onClose}
  deviceWidth={deviceWidth}
  deviceHeight={deviceHeight}
  >
    <View style={{ flex: 0.7 }}>
      {children}
    </View>   
  </Modal>

 );
}


export default HomeModal

