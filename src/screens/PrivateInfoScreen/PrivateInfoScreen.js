/* External dependencies */
import React from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

/* Internal dependencies */
import styles from "./style";
import useUser from "../../hooks/useUser";

function PrivateInfoScreen() {
  const { image, name, email, nickname, description } = useUser({ userId: 6 });
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaskedView
          style={styles.maskedView}
          maskElement={<Text style={styles.trendix}>Profile</Text>}
        >
          <LinearGradient
            colors={["cadetblue", "#ff3399"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0, y: 3 }}
            style={{ flex: 1 }}
          />
        </MaskedView>
        <View style={styles.screen}>
          <Image style={styles.img} source={{ uri: image }} />
          <Text style={styles.text}>이름</Text>
          <Text style={styles.info}> {name}</Text>
          <Text style={styles.text}>이메일</Text>
          <Text style={styles.info}> {email}</Text>
          <Text style={styles.text}>닉네임</Text>
          <Text style={styles.info}> {nickname}</Text>
          <Text style={styles.text}>내 소개글</Text>
          <Text style={styles.info}> {description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default PrivateInfoScreen;
