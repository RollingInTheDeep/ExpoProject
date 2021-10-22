import React, { useState } from "react";
import { Button, ImageBackground, Dimensions } from "react-native";
import { ImageManipulator } from "expo-image-crop";
import axios from "axios";

import styles from "./style";

function ImageCropScreen({ route, navigation }) {
  const photo = route.params.photo;
  // const [loading, setLoading] = useState(null);
  const [uri, setUri] = useState(photo);
  const { width, height } = Dimensions.get("window");

  const onToggleModal = async () => {
    try {
      // setLoading(true);
      const { data } = await axios.post(
        "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBWS_YMp1f6NUSsBL-JlL3zc4s7zXyx_4I",
        {
          requests: [
            {
              image: { content: uri.base64 },

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
    // setLoading(false);
  };

  return (
    <ImageBackground
      resizeMode="contain"
      style={styles.background}
      source={{ uri }}
    >
      <ImageManipulator
        photo={{ uri }}
        isVisible={true}
        onPictureChoosed={({ uri: uriM }) => setUri(uriM)}
        onToggleModal={onToggleModal}
      />
    </ImageBackground>
  );
}

export default ImageCropScreen;
