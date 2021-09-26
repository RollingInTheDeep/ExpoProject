import React, { memo } from "react";
import { Text, View, StyleSheet } from "react-native";
import ReadMore from "react-native-read-more-text";
import { Card } from "react-native-paper";
import CardButton from "../CardButton/CardButton";
import styles from "./styles";

function MyListItem({ text }) {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <CardButton />
          <ReadMore
            numberOfLines={3}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}
          >
            <Text style={styles.paragraph}>{text}</Text>
          </ReadMore>
        </View>
      </Card>
    </View>
  );
}

const renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={styles.readMore} onPress={handlePress}>
      Read more
    </Text>
  );
};

const renderRevealedFooter = (handlePress) => {
  return (
    <Text style={styles.showLess} onPress={handlePress}>
      Show less
    </Text>
  );
};

// scroll 움직일 때마다 windowSize에 해당하는 모든 Item 컴포넌트를 불필요하게 재렌더링 하는 것 방지
export default memo(MyListItem);
