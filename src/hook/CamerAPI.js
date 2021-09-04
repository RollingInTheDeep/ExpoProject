import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";

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
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photo = await ref.current.takePictureAsync();
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
        OCR Text
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
