/* External dependencies */
import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import GradientButton from "react-native-gradient-buttons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "react-native-vector-icons";
import { Card } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import MaskedView from "@react-native-masked-view/masked-view";
import { CommonActions } from "@react-navigation/routers";
/* Internal dependencies */
import styles from "./style";
import { createUserAPI } from "../../api/userAPI";
import { uploadImageAPI } from "../../api/userAPI";

function SignUpScreen({ route, navigation }) {
  // // const [image, setImage] = useState(null);
  // const [showImage, setShowImage] = useState(null);
  const [id, setId] = useState(null);
  const [pw, setPassWord] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [description, setDescription] = useState(null);
  const screenType = route.params.screenType;
  const ButtonText = route.params.screenType == "SignIn" ? "Sign Up" : "Modify";

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('카메라 액세스를 허용해야 사진을 선택할 수 있습니다.');
  //       }
  //     }
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     borderRadius: 100,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     let formData = new FormData();
  //     const config = {
  //       header: { 'content-type': 'multipart/form-data' },
  //     };

  //     let localUri = result.uri;
  //     let filename = localUri.split('/').pop();
  //     let match = /\.(\w+)$/.exec(filename);
  //     let type = match ? `image/${match[1]}` : `image`;
  //     formData.append('file', { type: type, uri: localUri, name: filename });

  //     setShowImage(result.uri);

  //     uploadImageAPI({ formData, config }).then((result) => {
  //       setImage(result.data.image);
  //     });
  //   }
  // };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.screen}>
        <View style={styles.header}>
          <FontAwesome name="edit" size={40} style={styles.img} />
          {screenType == "SignIn" ? (
            <Text style={styles.headerText}>회원 등록</Text>
          ) : (
            <Text style={styles.headerText}>회원 정보 수정</Text>
          )}
        </View>
        <Card style={styles.content}>
          {/* <MaskedView
            style={styles.masked}
            maskElement={
              <Text style={styles.text}>프로필 사진을 선택해주세요</Text>
            }
          >
            <LinearGradient
              colors={["cadetblue", "#ff3399"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 2 }}
              style={{ flex: 1 }}
            />
          </MaskedView>
          {!showImage ? (
            <TouchableOpacity onPress={pickImage} style={styles.profile}>
              <Text style={styles.text}>Click Me!</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <Image
                onPress={pickImage}
                source={{ uri: showImage }}
                style={styles.profile}
              />
            </TouchableOpacity>
          )} */}
          <TextInput
            placeholder="아이디"
            placeholderTextColor="#707070"
            style={styles.input}
            onChangeText={(id) => setId(id)}
          />
          <TextInput
            placeholder="비밀번호"
            placeholderTextColor="#707070"
            style={styles.input}
            onChangeText={(pw) => setPassWord(pw)}
          />
          <TextInput
            placeholder="닉네임"
            placeholderTextColor="#707070"
            style={styles.input}
            onChangeText={(nickname) => setNickname(nickname)}
          />
          <TextInput
            placeholder="내 소개글"
            placeholderTextColor="#707070"
            style={styles.input}
            onChangeText={(description) => setDescription(description)}
          />
        </Card>
        <GradientButton
          style={styles.gradient}
          textStyle={styles.text}
          text={ButtonText}
          onPressAction={() => {
            createUserAPI({
              id: id,
              pw: pw,
              nickname: nickname,
              description: description,
            }).then((res) => {
              res.data.success
                ? (navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [{ name: "SignIn" }],
                    })
                  ),
                  alert("회원가입이 완료되었습니다."))
                : alert("아이디가 중복되었습니다.");
            });
          }}
          violetPink
          impact
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignUpScreen;
