import React, { useState, useCallback } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./style"


const Item = React.memo(({ item, onPress, backgroundColor, textColor }) => {
 return( 
   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}> 
   <Text style={[styles.title,textColor ]}>{item.title}</Text>
  </TouchableOpacity>
  );
});

const HomeItem = ({isDelete}) => {
  const [selectedId, setSelectedId] = useState(null);
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

  
  const onPressItem = (index, type, id) => {
    setSelectedId(id);
    isDelete? data[index].isSelected= type : false;
    return setData([...data]);
  }

  const renderItem = useCallback(({ item, index }) => {
    
    const backgroundColor = item.isSelected ? "#2f4f4f" : '#ffffff';
    const color = item.isSelected ? 'white' : 'black';
    
    return (
      <Item
        item={item}
        onPress={() => onPressItem(index, !item.isSelected, item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  }, [selectedId]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        extraData = {selectedId}
      />
    </View>
  );
};

export default HomeItem;