import React, { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, FlatList } from "react-native";
import styles from "./style";
import { CommonActions } from "@react-navigation/routers";

const TextSelectionScreen = ({ route, navigation }) => {
  const text = route.params.text.match(/[^\r\n]+/g);
  const [textList, setTextList] = useState([]);

  let temp = [];

  useEffect(() => {
    text.map((item, idx) => {
      let data = new Object();
      data.isSelected = false;
      data.text = item;
      temp.push(data);
    });
    setTextList(temp);
  }, []);

  const onPressItem = (index, type) => {
    textList[index].isSelected = type;
    return setTextList([...textList]);
  };
  const returnTextList = () => {
    let text = "";
    textList.map((item) => {
      if (item.isSelected) {
        text += item.text + "\n";
      }
    });
    navigation.dispatch(
      CommonActions.navigate({
        name: "AddItemStack",
        params: { text: text, screenType: "private" },
      })
    );
  };
  const renderItem = ({ item, index }) => {
    /**textList.map((item) => {
      console.log("Id: " + item.isSelected + "Text: " + item.text );
    });**/
    const backgroundColor = item.isSelected ? "#2f4f4f" : "#ffffff";
    const color = item.isSelected ? "white" : "black";

    return (
      <TextItem
        item={item.text}
        onPress={() => onPressItem(index, !item.isSelected)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.firstContainer}>
      <FlatList
        style={styles.flatList}
        data={textList}
        renderItem={renderItem}
        keyExtractor={(item) => item.text}
      />
      <TouchableOpacity style={styles.secondContainer} onPress={returnTextList}>
        <Text style={styles.text}>다음</Text>
      </TouchableOpacity>
    </View>
  );
};

const TextItem = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[styles.container, backgroundColor]}
    onPress={onPress}
  >
    <Text style={[styles.text, textColor]}>{item}</Text>
  </TouchableOpacity>
);

export default TextSelectionScreen;
