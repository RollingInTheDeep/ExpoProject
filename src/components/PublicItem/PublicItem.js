/* External dependencies */
import React, { memo, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import { Card } from 'react-native-paper';
import CardButton from '../CardButton/CardButton';
import { BlurView } from 'expo-blur';

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
          <TouchableOpacity>
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
            numberOfLines={3}
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
            <Text style={styles.name}>댓글 보기</Text>
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

// scroll 움직일 때마다 windowSize에 해당하는 모든 Item 컴포넌트를 불필요하게 재렌더링 하는 것 방지
export default memo(PublicItem);
