import React, { useState } from "react";
import {
  Fab,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
  FormControl,
  Input,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import HomeModal from "components/Modal/HomeModal";
import HomeItem from "components/HomeItem/HomeItem";
import styles from "./style";

function HomeScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const _onPressDelete = () => {
    setShowButton(true);
    setIsDelete(true);
  };

  const deleteItem = () => {
    alert("삭제됩니다");
    setShowButton(false);
    setIsDelete(false);
  };
  const onClose = () => {
    setShowModal(false);
  };

  return (
    <View style={styles.container}>
      {showButton ? (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={deleteItem}
          isVisible={showButton}
        >
          <Text style={styles.deleteText}>삭제 완료</Text>
        </TouchableOpacity>
      ) : null}
      <HomeItem isDelete={isDelete} navigation={navigation}></HomeItem>
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Box position="relative" h={100} w="100%">
            <Fab
              position="absolute"
              size="sm"
              right={65}
              onPress={() => setShowModal(true)}
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
            />
            <Fab
              position="absolute"
              size="sm"
              right={0}
              onPress={_onPressDelete}
              icon={
                <Icon color="white" as={<AntDesign name="minus" />} size="sm" />
              }
            />
            <HomeModal show={showModal} onClose={onClose}>
              <KeyboardAwareScrollView style={styles.keybordContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}> 해쉬 태그 입력란</Text>
                  <FormControl style={styles.centeredView}>
                    <Input style={styles.form} multiline={true} />
                  </FormControl>
                  <TouchableOpacity style={styles.btn} onPress={onClose}>
                    <Text style={styles.btnText}>완료</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </HomeModal>
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  );
}

export default HomeScreen;
