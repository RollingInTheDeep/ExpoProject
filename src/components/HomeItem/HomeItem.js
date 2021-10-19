import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CommonActions } from "@react-navigation/routers";
import styles from "./style";

const HomeItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(CommonActions.navigate({ name: "PrivateStack" }));
        }}
        style={[styles.item]}
      >
        <Text style={[styles.title]}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeItem;
