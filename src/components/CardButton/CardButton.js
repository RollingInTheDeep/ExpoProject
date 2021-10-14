import React from "react";
import { View } from "react-native";
import { Entypo, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/routers";

import styles from "./styles";

function CardButton({ screen, navigation }) {
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.icon}
        name="edit"
        size={24}
        color="black"
        onPress={() => {
          navigation.dispatch(CommonActions.navigate({ name: "AddItemStack" }));
        }}
      />
      <MaterialIcons
        style={styles.icon}
        name="delete"
        size={24}
        color="black"
      />
      {screen == "private" ? (
        <Entypo
          style={styles.icon}
          name="share"
          size={24}
          color="black"
          onPress={() => {
            navigation.dispatch(
              CommonActions.navigate({ name: "AddItemStack" })
            );
          }}
        />
      ) : (
        <AntDesign style={styles.icon} name="hearto" size={24} color="black" />
      )}
    </View>
  );
}

export default CardButton;
