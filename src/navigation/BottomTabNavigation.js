/* External dependencies */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

/* Internal dependencies */
import { HomeScreen } from '../screens';
import { PrivateScreen } from '../screens';
import { AddItemScreen } from '../screens';
import { TextSelectionScreen } from '../screens';
import { PublicScreen } from '../screens';
import { CameraScreen } from '../screens';
import { ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

const CameraStack = createStackNavigator();
function CameraStackScreen() {
  return (
    <CameraStack.Navigator>
      <CameraStack.Screen name="Camera" component={CameraScreen} />
      <CameraStack.Screen name="문장 선택" component={TextSelectionScreen} />
    </CameraStack.Navigator>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Private" component={PrivateScreen} />
      <HomeStack.Screen name="글 추가" component={AddItemScreen} />
    </HomeStack.Navigator>
  );
}
const PublicStack = createStackNavigator();
function PublicStackScreen() {
  return (
    <PublicStack.Navigator>
      <PublicStack.Screen
        name="Public"
        options={{ headerShown: false }}
        component={PublicScreen}
      />
      <PublicStack.Screen
        name="Profile"
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
    </PublicStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home_"
      screenOptions={{
        tabBarActiveTintColor: 'purple', // 탭 활성
        tabBarInactiveTintColor: 'gray', // 탭 비활성
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Camera_"
        component={CameraStackScreen}
        options={{
          tabBarLabel: 'Camera',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home_"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Public"
        component={PublicStackScreen}
        options={{
          tabBarLabel: 'Public',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile_"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
