import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import axios from "axios";
import { CommonActions } from "@react-navigation/routers";
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  roading:{
    padding: 10,
  },
  loadingContainer:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    textAlign:"center",
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const CameraAPI = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [loading, setLoading] = useState(null);
  
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
    const options = { quality: 0.7, base64: true };
    const text = await ref.current.takePictureAsync(options);
    try {
      setLoading(true);
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
      navigation.dispatch(
        CommonActions.navigate({
          name: "TextSelection",
          params: { text: data.responses[0].fullTextAnnotation.text },
        })
      );
    } catch (e) {
      console.log("error: ", e);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.back} ref={ref}>
      {loading == true ? (
            <LinearGradient
            colors={['#C9D6FF', '#E2E2E2']}
            style={styles.linearGradient}
            >
           <ActivityIndicator style={styles.roading}  size="large" color="#ff0000" />
           </LinearGradient>
        ) : null}
        <View style={styles.buttonContainer}>
        {loading == false ? (
            <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <MaterialCommunityIcons
              name="circle-slice-8"
              style={{ color: "white", fontSize: 80 }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        ) : null}
        </View>
      </Camera>
    </View>
   
  );
};
export default CameraAPI;
