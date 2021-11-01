import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import StackNavigator from "./navigation/StackNavigator";

const App = () => {
  let [fontsLoaded] = useFonts({
    JuaRegular: require("../assets/fonts/Jua-Regular.ttf"),
    KalamRegular: require("../assets/fonts/Kalam-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};

export default App;
