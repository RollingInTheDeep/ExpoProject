import React, { useState } from "react";
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import GradientButton from "react-native-gradient-buttons";
import InformationInput from "components/TextInput/InformationInput";
import { CommonActions } from "@react-navigation/routers";
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
function SignInScreen({ navigation }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <MaskedView
        style={styles.introScreen}
        maskElement={<Text style={styles.trendix}>Trendix</Text>}
      >
        <LinearGradient
          colors={['cadetblue', '#fabada']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0.33 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
        <View style={styles.input}>
          <InformationInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <InformationInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />
          <View style={styles.textRow}>
            <Text style={styles.leftText}>계정을 잊어버리셨나요?</Text>
            <TouchableOpacity>
              <Text style={styles.rigthText}>계정 찾으러가기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btn}>
            <GradientButton
              style={styles.gradient}
              textStyle={styles.text}
              text="LOGIN"
              pinkDarkGreen
              impact
              onPressAction={() => {
                navigation.dispatch(
                  CommonActions.reset({ index: 1, routes: [{ name: "Main" }] })
                );
              }}
            />
            <GradientButton
              style={styles.gradient}
              textStyle={styles.text}
              text="SIGNUP"
              violetPink
              impact
              onPressAction={() => {
                navigation.dispatch(CommonActions.navigate({ name: "SignUp" }));
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignInScreen;
