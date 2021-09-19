import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomTabNavigation from "navigation/BottomTabNavigation";

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.wrap}>
      <StatusBar style="auto" />
      <BottomTabNavigation />
    </SafeAreaView>
  );
};

export default App;
