/* External dependencies */
import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import GradientButton from 'react-native-gradient-buttons';
import InformationInput from 'components/TextInput/InformationInput';
import { CommonActions } from '@react-navigation/routers';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

/* Internal dependencies */
import styles from './style';
import { getUserAPI } from '../../api/userAPI';

function SignInScreen({ navigation }) {
  const [id, setID] = useState();
  const [pw, setPassWord] = useState();

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
            labelValue={id}
            onChangeText={(userId) => setID(userId)}
            placeholderText="ID"
            iconType="ID"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <InformationInput
            labelValue={pw}
            onChangeText={(userPassWord) => setPassWord(userPassWord)}
            placeholderText="PASSWORD"
            iconType="PW"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
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
                getUserAPI({ id, pw }).then((result) => {
                  result.data
                    ? navigation.dispatch(
                        CommonActions.reset({
                          index: 1,
                          routes: [
                            {
                              name: 'Main',
                            },
                          ],
                        })
                      )
                    : alert('잘못된 로그인입니다.');
                });
              }}
            />
            <GradientButton
              style={styles.gradient}
              textStyle={styles.text}
              text="SIGNUP"
              violetPink
              impact
              onPressAction={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: 'SignUp',
                    params: { screenType: 'SignIn' },
                  })
                );
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default SignInScreen;
