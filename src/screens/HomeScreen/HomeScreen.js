import HomeItem from "./HomeItem.js/HomeItem";
import styles from "./style";
import * as React from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, FlatList,Dimensions, Platform,NativeModules, Text, TouchableOpacity  } from "react-native";
import { useState } from "react";
import { Fab, Icon, Box, Center, NativeBaseProvider,
  Image,   Modal, Button, KeyboardAvoidingView,
  FormControl,
  Input,
   } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";
import HomeModal from "./Modal/HomeModal";

function HomeScreen(){
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(false);

    const deleteItem = () =>{
    alert('삭제됩니다');
    setShowButton(false);
  }
   const onClose = () => {
    setShowModal(false);
  }
  return(
       <View style={styles.container}>
        {showButton ?    
          (<TouchableOpacity style = {styles.deleteButton} onPress={deleteItem} isVisible={showButton}> 
             <Text style = {styles.deleteText}>삭제 완료</Text>
          </TouchableOpacity>) : null
        }
        <HomeItem></HomeItem>     
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
              onPress={() => setShowButton(true)}
              icon={
                <Icon color="white" as={<AntDesign name="minus" />} size="sm" />
              }
            />
            <HomeModal show={showModal} onClose={onClose} >
            <KeyboardAwareScrollView style={styles.keybordContainer} >
            <View style = {styles.modalView}>
              <Text style = {styles.modalText}> 해쉬 태그 입력란</Text>
              <FormControl style = {styles.centeredView} >
              <Input style = {styles.form} multiline = {true}  />
              </FormControl>
              <Button  style = {styles.fab} onPress={onClose}>완료 </Button>
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