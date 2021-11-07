import React, { useState } from 'react';
import { View } from 'react-native';
import { Entypo, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/routers';

import styles from './styles';

function CardButton({ screen, navigation, text }) {
  const [heart, setHeart] = useState(false);
  const iconName = heart ? 'heart' : 'hearto';
  const color = heart ? '#cd1076' : 'black';
  const change = () => {
    heart ? setHeart(false) : setHeart(true);
  };
  return (
    <View style={styles.container}>
      <Entypo
        style={styles.icon}
        name="edit"
        size={24}
        color="white"
        onPress={() => {
          navigation.dispatch(
            CommonActions.navigate({
              name: 'AddItemStack',
              params: { screenType: screen, apiType: 'put', text: text },
            })
          );
        }}
      />
      <MaterialIcons
        style={styles.icon}
        name="delete"
        size={24}
        color="white"
      />
      {screen == 'private' ? (
        <Entypo
          style={styles.icon}
          name="share"
          size={24}
          color="#8b00ff"
          onPress={() => {
            navigation.dispatch(
              CommonActions.navigate({
                name: 'AddItemStack',
                params: { screenType: 'public', apiType: 'post', text: text },
              })
            );
          }}
        />
      ) : (
        <AntDesign
          style={styles.icon}
          name={iconName}
          size={24}
          color={color}
          onPress={change}
        />
      )}
    </View>
  );
}

export default CardButton;
