import React, { useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import styles from "./style"


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}> 
   <Text style={[styles.title,textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeItem = () => {
  const [data, setData] = React.useState([
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "#irst Item",
    isSelected : false,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "#Second Item",
    isSelected : false,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    isSelected : false,
  },
   {
    id: "58694a0-3da1-471f-bd96-145571e29d72",
    title: "d Item",
    isSelected : false,
  },
   {
    id: "5869a0f-3da1-471f-bd96-145571e29d72",
    title: "s Item",
    isSelected : false,
  }
  ,
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    isSelected : false,
  },
   {
    id: "58694a0-3da1-471f-bd96-145571e29d72",
    title: "d Item",
    isSelected : false,
  },
   {
    id: "5869a0f-3da1-471f-bd96-145571e29d72",
    title: "s Item",
    isSelected : false,
  }
  ,
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    isSelected : false,
  },
   {
    id: "58694a0-3da1-471f-bd96-145571e29d72",
    title: "d Item",
    isSelected : false,
  },
   {
    id: "5869a0f-3da1-471f-bd96-145571e29d72",
    title: "s Item",
    isSelected : false,}
]) 

  
  const onPressItem = (index, type) => {
    data[index].isSelected= type;
    return setData([...data]);
  }

  const renderItem = ({ item, index }) => {
   
    const backgroundColor = item.isSelected ? "#2f4f4f" : '#ffffff';
    const color = item.isSelected ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => onPressItem(index, !item.isSelected)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

export default HomeItem;