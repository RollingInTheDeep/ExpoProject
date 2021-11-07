/* External dependencies */
import React, { memo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ReadMore from 'react-native-read-more-text';
import { Card } from 'react-native-paper';
import CardButton from '../CardButton/CardButton';
import { BlurView } from 'expo-blur';

/* Internal dependencies */
import styles from './style';

function PublicItem({ text, screen, navigation, setModalVisible }) {
  const modal = () => {
    setModalVisible(true);
  };
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <BlurView style={styles.container1} tint="dark" intensity={95}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/M.png')}
              style={styles.profile}
            />
          </TouchableOpacity>
          <Text style={styles.name}>닉네임</Text>
          <CardButton
            style={styles.btn}
            screen={screen}
            navigation={navigation}
            text={text}
          />
        </BlurView>
        <BlurView style={styles.title} tint="dark" intensity={70}>
          <Text style={styles.name}>입력한제목이들어갑니다.</Text>
        </BlurView>
        <View style={styles.container2}>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
          >
            <Text style={styles.paragraph}>{text}</Text>
          </ReadMore>
        </View>
        <BlurView style={styles.edit} tint="dark" intensity={95}>
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
