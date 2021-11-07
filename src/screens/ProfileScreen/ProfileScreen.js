/* External dependencies */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from "react-native";
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

function ProfileScreen({ route, navigation }) {
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <View style={styles.screen}>
      <Image>{image}</Image>
      <Text style={styles.input}> 이름</Text>
      <Text style={styles.input}> 이메일</Text>
      <Text style={styles.input}> 닉네임</Text>
      <Text style={styles.input}> 내 소개글</Text>
    </View>
  );
}

export default ProfileScreen;
