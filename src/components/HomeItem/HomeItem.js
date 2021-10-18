import React, { useState, useCallback, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CommonActions } from "@react-navigation/routers";
import useFolder from "../../hooks/useFolder";
import styles from "./style";

const HomeItem = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(CommonActions.navigate({ name: "MyListStack" }));
        }}
        style={[styles.item]}
      >
        <Text style={[styles.title]}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeItem;
