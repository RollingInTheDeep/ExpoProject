import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  Image,
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
  const [photo, setPhoto] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  let data = null;

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

    setPhoto(img);
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
          source={{ uri }}
        >
          <ImageManipulator
            photo={{ uri }}
            isVisible={isVisible}
            onPictureChoosed={async ({ uri, base64 }) => {
              try {
                setLoading(true);
                ({ data } = await axios.post(
                  "https://vision.googleapis.com/v1/images:annotate?key=your_vision_key",
                  {
                    requests: [
                      {
                        image: { content: base64 ? base64 : photo.base64 },

                        features: [
                          { type: "TEXT_DETECTION", maxResults: 10 },
                          {
                            type: "DOCUMENT_TEXT_DETECTION",
                            maxResults: 10,
                          },
                        ],
                      },
                    ],
                  }
                ));
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "문장 선택",
                    params: { text: data.responses[0].fullTextAnnotation.text },
                  })
                );
                setLoading(false);
              } catch (e) {
                console.log("error: ", e);
              }
            }}
            saveOptions={{
              base64: true,
            }}
            onToggleModal={onToggleModal}
          />
        </ImageBackground>
      ) : null}
    </View>
  );
};
export default CameraScreen;
