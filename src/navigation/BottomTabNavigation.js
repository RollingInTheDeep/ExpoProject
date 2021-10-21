/* External dependencies */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

/* Internal dependencies */
import { HomeScreen } from "../screens";
import { PrivateScreen } from "../screens";
import { AddItemScreen } from "../screens";
import { TextSelectionScreen } from "../screens";
import { PublicScreen } from "../screens";
import CameraAPI from "../hooks/CamerAPI";

const Tab = createBottomTabNavigator();

const CameraStack = createStackNavigator();
function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="재촬영" component={CameraAPI} />
      <CameraStack.Screen
        name="TextSelection"
        component={TextSelectionScreen}
      />
    </CameraStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name="PrivateStack" component={PrivateScreen} />
      <HomeStack.Screen name="AddItemStack" component={AddItemScreen} />
    </HomeStack.Navigator>
  );
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "purple", // 탭 활성
        tabBarInactiveTintColor: "gray", // 탭 비활성
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Camera"
        component={CameraStackScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Public"
        component={PublicScreen}
        options={{
          tabBarLabel: "Public",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
