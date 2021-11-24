/* External dependencies */
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import usePublicByUser from "../../hooks/usePublicByUser";
import PublicItem from "../../components/PublicItem/PublicItem";

function ProfileScreen({ route, navigation }) {
  const userId = route.params.userId;
  const [modalVisible, setModalVisible] = useState(false);
  const { publicArticleList, onCreate } = usePublicByUser({ userId });

  return (
    <View>
      <Text>hi</Text>
      <FlatList
        data={publicArticleList}
        renderItem={({ item }) => (
          <PublicItem
            item={item}
            screen={"public"}
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        )}
        keyExtractor={(item, index) => item + index}
        windowSize={2}
      />
    </View>
  );
}

export default ProfileScreen;
