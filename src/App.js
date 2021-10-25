import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import StackNavigator from "./navigation/StackNavigator";

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
 
let [fontsLoaded] = useFonts({
  'JuaRegular': require('../assets/fonts/Jua-Regular.ttf'), 
  'KalamRegular': require('../assets/fonts/Kalam-Regular.ttf'),
});

  if(!fontsLoaded){
    return <AppLoading />;
  }else{
    return (
      <NavigationContainer>
        <SafeAreaView style={styles.wrap}>
          <StatusBar style="auto" />
          <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
};

export default App;
