import React, { useState } from "react";
import { View } from "react-native";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/routers";

import styles from "./styles";
import { withTheme } from "styled-components";

function CardButton({ screen, navigation, text }) {
  const [heart, setHeart] = useState(false);
  const iconName = heart ? "heart" : "hearto";
  const color = heart ? "#cd1076" : "white";
  const privateColor = screen == "private" ? "black" : "white";
  const change = () => {
    heart ? setHeart(false) : setHeart(true);
  };
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.icon}
        name="edit"
        size={24}
        color={privateColor}
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: "글 추가",
              params: { screenType: screen, apiType: "put", text: text },
            })
          );
        }}
      />
      <MaterialIcons
        style={styles.icon}
        name="delete"
        size={24}
        color={privateColor}
      />
      {screen == "private" ? (
        <Entypo
          style={styles.icon}
          name="share"
          size={24}
          color="black"
          onPress={() => {
            navigation.dispatch(
              CommonActions.navigate({
                name: "글 추가",
                params: { screenType: "public", apiType: "post", text: text },
              })
            );
          }}
        />
      ) : (
        <AntDesign
          style={styles.icon}
          name={iconName}
          size={24}
          color={color}
          onPress={change}
        />
      )}
    </View>
  );
}

export default CardButton;
