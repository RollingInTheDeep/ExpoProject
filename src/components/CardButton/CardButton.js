import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

function CardButton() {
  return (
    <View style={styles.container}>
      <Entypo style={styles.icon} name="edit" size={24} color="black" />
      <MaterialIcons
        style={styles.icon}
        name="delete"
        size={24}
        color="black"
      />
      <Entypo
        style={styles.icon}
        name="share"
        size={24}
        color="black"
        onPress={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 220,
  },
  icon: {
    marginLeft: 8,
    marginBottom: 7,
  },
});

export default CardButton;
