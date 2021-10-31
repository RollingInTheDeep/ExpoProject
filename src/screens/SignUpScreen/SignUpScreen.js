import React, { useState, useEffect } from 'react';
import { Text, View,TextInput, Keyboard ,TouchableWithoutFeedback,
    TouchableOpacity, Button, Image } from 'react-native';
import GradientButton from "react-native-gradient-buttons";
import { FontAwesome } from "react-native-vector-icons";
import { Card } from 'react-native-paper';
import styles from "./style"
import { CommonActions } from "@react-navigation/routers";
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
function SignUpScreen({ navigation }){

  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('카메라 액세스를 허용해야 사진을 선택할 수 있습니다.');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      borderRadius: 100,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return(
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style = {styles.screen}>
     <View style={styles.header}>
          <FontAwesome
            name="edit"
            size={40}
            style={styles.img}
          />
          <Text style={styles.headerText}>회원 등록</Text>
      </View> 
        <Card style={styles.content}>
            <TextInput
              placeholder="닉네임"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <TextInput
              placeholder="내 소개글"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <MaskedView
            style={styles.masked}
            maskElement={<Text style={styles.text}>프로필 사진을 선택해주세요</Text>}
            >
           <LinearGradient
             colors={['cadetblue', '#ff3399']}
             start={{ x: 1, y: 1 }}
             end={{ x: 0, y: 2 }}
             style={{ flex: 1 }}
          />
          </MaskedView>
             {!image ?
             <TouchableOpacity  onPress={pickImage}  style={styles.profile} >
               <Text style={styles.text}>Click Me!</Text>
             </TouchableOpacity> : 
           <TouchableOpacity  onPress={pickImage} >
           <Image onPress={pickImage} source={{ uri: image }} style={styles.profile}/>
           </TouchableOpacity>}
        </Card>
        <GradientButton
            style={styles.gradient}
            textStyle={styles.text}
            text="SIGN UP"
            onPressAction={() => {
              navigation.dispatch(
                  CommonActions.reset({ index: 1, routes: [{ name: "SignIn" }] })
              );
            }}
            violetPink
            impact
        />
  </View>
 </TouchableWithoutFeedback>
  );
}

export default SignUpScreen;