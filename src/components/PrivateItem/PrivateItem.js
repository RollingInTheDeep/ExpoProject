/* External dependencies */
import React, { memo } from "react";
import { Text, View } from "react-native";
import ReadMore from "react-native-read-more-text";
import { Card } from "react-native-paper";
import CardButton from "../CardButton/CardButton";

/* Internal dependencies */
import styles from "./styles";

function PrivateItem({ text, screen, navigation }) {
  return (
    <View>
      <Card style={styles.card}>
        <View style={styles.container}>
          <View style={styles.container1}>
            <CardButton
              style={styles.btn}
              screen={screen}
              navigation={navigation}
              text={text}
            />
          </View>
          <View style={styles.container2}>
            <ReadMore
              numberOfLines={4}
              renderTruncatedFooter={renderTruncatedFooter}
              renderRevealedFooter={renderRevealedFooter}
            >
              <Text style={styles.paragraph}>{text}</Text>
            </ReadMore>
          </View>
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
export default memo(PrivateItem);
