import React, { useState, useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { CommonActions } from "@react-navigation/routers";
import useFolder from "../../hooks/useFolder";
import styles from "./style";

const Item = React.memo(({ item, onPress, backgroundColor, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
    </TouchableOpacity>
  );
});

const HomeItem = ({ isDelete, navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  // const [data, setData] = React.useState([]);
  const folderList = useFolder();

  const onPressItem = (index, type, id) => {
    setSelectedId(id);
    isDelete
      ? (data[index].isSelected = type)
      : navigation.dispatch(CommonActions.navigate({ name: "MyListStack" }));
    return setData([...data]);
  };

  const renderItem = useCallback(
    ({ item, index }) => {
      // const backgroundColor = item.isSelected ? "#2f4f4f" : "#ffffff";
      // const color = item.isSelected ? "white" : "black";

      return (
        <Item
          item={item}
          onPress={() => {}}
          // backgroundColor={{ backgroundColor }}
          // textColor={{ color }}
        />
      );
    },
    [selectedId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={folderList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        extraData={selectedId}
      />
    </View>
  );
};

export default HomeItem;
