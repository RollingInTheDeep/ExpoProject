/* External dependencies */
import React, { memo, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import { Card } from 'react-native-paper';
import CardButton from '../CardButton/CardButton';
import { BlurView } from 'expo-blur';
import { CommonActions } from '@react-navigation/routers';

import styles from './style';

function PublicItem({ item, screen, navigation, setModalVisible }) {
  let hashTag = item.hashTag ? item.hashTag.split(' ') : [];

  const modal = () => {
    setModalVisible(true);
  };

  const Item = ({ item, index }) => {
    return (
      <View style={styles.hashItem}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  };
  const renderItem = ({ item, index }) => {
    return Item({ item, index });
  };

  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <BlurView style={styles.container1} tint="dark" intensity={70}>
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: 'Profile',
                  params: {
                    userId: item.userId,
                    img: item.image,
                    nickName: item.nickname,
                  },
                })
              );
            }}
          >
            <Image source={{ uri: item.image }} style={styles.profile} />
          </TouchableOpacity>
          <Text style={styles.name}>{item.nickname}</Text>
          <CardButton
            style={styles.btn}
            screen={screen}
            navigation={navigation}
            text={item}
          />
        </BlurView>
        <View style={styles.title}>
          <Text style={styles.titleText}>{item.title}</Text>
        </View>
        <View style={styles.container2}>
          <ReadMore
            numberOfLines={4}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
          >
            <Text style={styles.paragraph}>{item.content}</Text>
          </ReadMore>
          <Text style={styles.date}>{item.createDate.split('T')[0]}</Text>
        </View>
        <View style={styles.edit} tint="dark" intensity={30}>
          <FlatList
            style={styles.list}
            data={hashTag}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            horizontal={true}
            nestedScrollEnabled={true}
          />
        </View>
        <BlurView style={styles.edit} tint="dark" intensity={70}>
          <TouchableOpacity onPress={modal}>
            <Text style={styles.name}>?????? ??????</Text>
          </TouchableOpacity>
        </BlurView>
      </View>
    </Card>
  );
}

const renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={styles.text} onPress={handlePress}>
      Read more
    </Text>
  );
};

const renderRevealedFooter = (handlePress) => {
  return (
    <Text style={styles.text} onPress={handlePress}>
      Show less
    </Text>
  );
};

// scroll ????????? ????????? windowSize??? ???????????? ?????? Item ??????????????? ??????????????? ???????????? ?????? ??? ??????
export default memo(PublicItem);
