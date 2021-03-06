/* External dependencies */
import React, { useState, useCallback, useContext, useEffect } from "react";
import {
  Fab,
  Icon,
  Box,
  Center,
  NativeBaseProvider,
  FormControl,
  Input,
  FlatList,
  Modal,
} from "native-base";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

/* Internal dependencies */
import styles from "./style";
import HomeModal from "components/Modal/HomeModal";
import HomeItem from "components/HomeItem/HomeItem";
import { createFoldertAPI, removeFolderAPI } from "../../api/folderAPI";
import useFolder from "../../hooks/useFolder";

const HomeScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setModal] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [change, setChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [text, setText] = useState(null);
  const [selectedItem, setSelectedItem] = useState([]);
  const [value, setValue] = useState(null);

  const { folderList, onCreate, onRemove } = useFolder({
    userId: value ? value : 6,
  });

  const getData = async () => {
    setValue(await AsyncStorage.getItem("userId"));
  };

  useEffect(() => {
    getData().then((res) => {
      console.log(folderList);
    });
  }, [value]);

  const _onPressDelete = () => {
    if (showButton) {
      setShowButton(false);
      setIsDelete(false);
    } else {
      setShowButton(true);
      setIsDelete(true);
    }
  };

  const getSelectedItem = (item) => {
    setSelectedItem(item);
    change ? setChange(false) : setChange(true);
  };

  const deleteItem = () => {
    removeFolder();
    setModal(false);
    setShowButton(false);
    setIsDelete(false);
  };
  const undo = () => {
    setShowModal(false);
  };
  const createFolder = () => {
    setShowModal(false);
    {
      text
        ? (createFoldertAPI({ userId: value, name: text }).then((result) => {
            onCreate();
          }),
          setText(null))
        : null;
    }
  };

  const removeFolder = () => {
    removeFolderAPI(selectedItem).then((res) => {
      onRemove(selectedItem);
    });
  };

  const renderItem = useCallback(
    ({ item }) => {
      const backgroundColor = selectedItem.includes(item.folderId)
        ? "#660099"
        : "#ffffff";
      const color = selectedItem.includes(item.folderId) ? "white" : "black";

      return (
        <HomeItem
          item={item}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          selectedItem={selectedItem}
          getSelectedItem={getSelectedItem}
          navigation={navigation}
          screenType="HomeScreen"
          isDelete={isDelete}
        />
      );
    },
    [getSelectedItem]
  );
  return (
    <View style={styles.container}>
      {showButton ? (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            setModal(true);
          }}
          isVisible={() => {
            showButton;
          }}
        >
          <Text style={styles.deleteText}>??????</Text>
        </TouchableOpacity>
      ) : null}
      <NativeBaseProvider>
        <FlatList
          data={folderList}
          renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          extraData={change}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
        <Center flex={1} px="2">
          <Box position="relative" w="100%">
            <Fab
              position="absolute"
              size="sm"
              colorScheme="indigo"
              right={65}
              bottom={-8}
              onPress={() => {
                setShowModal(true);
              }}
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
            />
            <Fab
              position="absolute"
              size="sm"
              colorScheme="indigo"
              bottom={-8}
              right={0}
              onPress={() => {
                _onPressDelete();
              }}
              icon={
                <Icon color="white" as={<AntDesign name="minus" />} size="sm" />
              }
            />
            <HomeModal show={showModal} onClose={undo}>
              <KeyboardAwareScrollView style={styles.keybordContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>?????? ??????</Text>
                  <FormControl style={styles.centeredView}>
                    <Input
                      style={styles.form}
                      onChangeText={(text) => setText(text)}
                      multiline={true}
                    />
                  </FormControl>
                  <TouchableOpacity style={styles.btn} onPress={createFolder}>
                    <Text style={styles.btnText}>??????</Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </HomeModal>
            <Modal
              isOpen={showDeleteModal}
              onClose={() => {
                setModal(false);
              }}
              _backdrop={{ _dark: { bg: "coolGray.800" }, bg: "violet.200" }}
            >
              <Modal.Content maxWidth="350" maxH="230">
                <Modal.Header>?????? ??????</Modal.Header>
                <Modal.Body>
                  <Text style={styles.text}>
                    ????????? ??????????????? ?????? ???????????? {"\n"} ???????????????
                    ???????????????.
                  </Text>
                </Modal.Body>
                <Modal.Footer>
                  <TouchableOpacity
                    onPress={() => {
                      setModal(false);
                    }}
                  >
                    <Text style={styles.text}>??????</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      deleteItem();
                    }}
                  >
                    <Text style={styles.text}>??????</Text>
                  </TouchableOpacity>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  );
};

export default HomeScreen;
