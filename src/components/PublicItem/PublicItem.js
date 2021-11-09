/* External dependencies */
import React, { memo } from "react";
import { Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import ReadMore from "react-native-read-more-text";
import { Card } from "react-native-paper";
import CardButton from "../CardButton/CardButton";
import { BlurView } from "expo-blur";

/* Internal dependencies */
import styles from "./style";
import { useToken } from "native-base";

function PublicItem({ item, screen, navigation, setModalVisible }) {
  // hashTag를 string으로 받아왔다고 가정, 근데 이것도 dict 형태로 만들어야 할듯
  let hashTag = item.hashTag ? item.hashTag.split(" ") : [];

  const modal = () => {
    setModalVisible(true);
  };
  // const hashItem = [
  //   { text: "#감동" },
  //   { text: "#눈물" },
  //   { text: "#소설" },
  //   { text: "#다시봐" },
  //   { text: "#꼭봐" },
  //   { text: "#내일봐" },
  //   { text: "#내일봐" },
  //   { text: "#내일봐" },
  //   { text: "#내일봐" },
  //   { text: "#내일봐" },
  // ];
  const Item = ({ item, index }) => {
    return <Text style={styles.text}>{item}</Text>;
  };
  const renderItem = ({ item, index }) => {
    return Item({ item, index });
  };
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <BlurView style={styles.container1} tint="dark" intensity={100}>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/M.png")}
              style={styles.profile}
            />
          </TouchableOpacity>
          <Text style={styles.name}>닉네임</Text>
          <CardButton
            style={styles.btn}
            screen={screen}
            navigation={navigation}
            text={item}
          />
        </BlurView>
        <BlurView style={styles.title} tint="dark" intensity={20}>
          <Text style={styles.name}>{item.title}</Text>
        </BlurView>
        <View style={styles.container2}>
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
          >
            <Text style={styles.paragraph}>{item.content}</Text>
          </ReadMore>
          <Text style={styles.date}>2021-11-08</Text>
        </View>
        <BlurView style={styles.edit} tint="dark" intensity={30}>
          <FlatList
            style={styles.list}
            data={hashTag}
            renderItem={renderItem}
            keyExtractor={(item, index) => item + index}
            horizontal={true}
            nestedScrollEnabled={true}
          />
        </BlurView>
        <BlurView style={styles.edit} tint="dark" intensity={100}>
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
