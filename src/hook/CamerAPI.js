import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import axios from "axios";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "blue",
  },
});

const CameraAPI = () => {
  const [text, setText] = useState("");
  const [complete, setComplete] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, [text]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const options = { quality: 0.7, base64: true };
    const text = await ref.current.takePictureAsync(options);
    try {
      const { data } = await axios.post(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBWS_YMp1f6NUSsBL-JlL3zc4s7zXyx_4I",
        {
          requests: [
            {
              image: { content: text.base64 },

              features: [
                { type: "TEXT_DETECTION", maxResults: 10 },
                { type: "DOCUMENT_TEXT_DETECTION", maxResults: 10 },
              ],
            },
          ],
        }
      );
      setText(data.responses[0].fullTextAnnotation.text);
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return text ? (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        {text}
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <MaterialCommunityIcons
              name="circle-slice-8"
              style={{ color: "white", fontSize: 80 }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
export default CameraAPI;
