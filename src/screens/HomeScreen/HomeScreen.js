/* External dependencies */
import React, { useState, useEffect } from "react";
import {
  Fab,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
  FormControl,
  Input,
  FlatList,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

/* Internal dependencies */
import styles from "./style";
import HomeModal from "components/Modal/HomeModal";
import HomeItem from "components/HomeItem/HomeItem";
import { createFoldertAPI } from "../../api/folderAPI";
import useFolder from "../../hooks/useFolder";

function HomeScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [text, setText] = useState(null);
  const { folderList, onCreate, onRemove } = useFolder({ userId: 3 });

  const _onPressDelete = () => {
    setShowButton(true);
    setIsDelete(true);
  };

  const deleteItem = () => {
    alert("삭제됩니다");
    setShowButton(false);
    setIsDelete(false);
  };

  const createFolder = () => {
    setShowModal(false);
    {
      text
        ? (createFoldertAPI({ userId: 3, name: text }).then((result) => {
            onCreate();
          }),
          setText(null))
        : null;
    }
  };

  // const removeFolder = () => {
  //   removeFolderAPI({ folderId }).then(result => {
  //     onRemove(folderId);
  //   });
  // };

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

      <NativeBaseProvider>
        <FlatList
          data={folderList}
          renderItem={({ item }) => (
            <HomeItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => item + index}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
        <Center flex={1} px="2">
          <Box position="relative" w="100%">
            <Fab
              position="absolute"
              size="sm"
              right={65}
              bottom={-8}
              onPress={() => setShowModal(true)}
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
            />
            <Fab
              position="absolute"
              size="sm"
              bottom={-8}
              right={0}
              onPress={_onPressDelete}
              icon={
                <Icon color="white" as={<AntDesign name="minus" />} size="sm" />
              }
            />
            <HomeModal show={showModal} onClose={createFolder}>
              <KeyboardAwareScrollView style={styles.keybordContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}> 해쉬 태그 입력란</Text>
                  <FormControl style={styles.centeredView}>
                    <Input
                      style={styles.form}
                      onChangeText={(text) => setText(text)}
                      multiline={true}
                    />
                  </FormControl>
                  <TouchableOpacity style={styles.btn} onPress={createFolder}>
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