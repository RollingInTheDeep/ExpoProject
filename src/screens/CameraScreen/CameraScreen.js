import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { CommonActions } from "@react-navigation/routers";
import { LinearGradient } from "expo-linear-gradient";
import { ImageManipulator } from "expo-image-crop";
import axios from "axios";
import styles from "./style.js";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(null);
  const [uri, setUri] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onToggleModal = () => {
    setIsVisible(!isVisible);
  };

  const takePhoto = async () => {
    const options = { quality: 0.7, base64: true };
    const img = await ref.current.takePictureAsync(options);
    setUri(img.uri);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={ref}>
        {loading == true ? (
          <LinearGradient
            colors={["#C9D6FF", "#E2E2E2"]}
            style={styles.linearGradient}
          >
            <ActivityIndicator
              style={styles.roading}
              size="large"
              color="#ff0000"
            />
          </LinearGradient>
        ) : null}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <MaterialCommunityIcons
              name="circle-slice-8"
              style={{ color: "white", fontSize: 80 }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </Camera>
      {isVisible ? (
        <ImageBackground
          resizeMode="contain"
          style={styles.background}
          //   source={{ uri: `data:image/png;base64,${uri}` }}
          source={{ uri }}
        >
          <ImageManipulator
            photo={{ uri }}
            isVisible={isVisible}
            onPictureChoosed={({ uri: uriM }) => setUri(uriM)}
            onToggleModal={onToggleModal}
          />
        </ImageBackground>
      ) : null}
    </View>
  );
};
export default CameraScreen;
