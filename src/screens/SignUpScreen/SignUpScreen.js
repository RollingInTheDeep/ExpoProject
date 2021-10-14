import React from 'react';
import { Text, View,TextInput, Keyboard ,TouchableWithoutFeedback,
    TouchableOpacity } from 'react-native';
import GradientButton from "react-native-gradient-buttons";
import { FontAwesome } from "react-native-vector-icons";
import { Card } from 'react-native-paper';
import styles from "./style"

function SignUpScreen(){
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
          <View style={styles.all}>
          <Card style={styles.content}>
            <TextInput
              textContentType="name"
              placeholder="NAME"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <TextInput
              textContentType="emailAddress"
              placeholder="EMAIL"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <TextInput
              textContentType="password"
              secureTextEntry={true}
              placeholder="PASSWORD"
              placeholderTextColor="#707070"
              style={styles.input}
            />
            <GradientButton
              style={styles.gradient}
              textStyle={styles.text}
              text="SIGN UP"
              height={50}
              violetPink
              impact
            />
          </Card>
        </View>
           <View>
          <View style={styles.textRow}>
            <Text style={styles.leftText}>
              이미 계정이 있으신가요?
            </Text>
            <TouchableOpacity>
            <Text style={styles.rigthText}>로그인하러가기</Text>
            </TouchableOpacity>
          </View>
        </View>
  </View>
 </TouchableWithoutFeedback>
  );
}

export default SignUpScreen;