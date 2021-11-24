/* External dependencies */
import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import usePublicByUser from '../../hooks/usePublicByUser';
import PublicItem from '../../components/PublicItem/PublicItem';
import styles from './style';
import { LinearGradient } from 'expo-linear-gradient';
function ProfileScreen({ route, navigation }) {
  const userId = route.params.userId;
  const image = route.params.img;
  const nickName = route.params.nickName;
  const [modalVisible, setModalVisible] = useState(false);
  const { publicArticleList, onCreate } = usePublicByUser({ userId });
  const count = publicArticleList.length;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.profile} />
      <LinearGradient
        colors={['#e2b0ff', '#623aa2']}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 1.0, y: 1.0 }}
        style={styles.linear}
      >
        <TouchableOpacity style={styles.nickname}>
          <Text style={styles.text}>{nickName}</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Text style={styles.count}>게시물</Text>
      <FlatList
        style={styles.list}
        data={publicArticleList}
        renderItem={({ item }) => (
          <PublicItem
            item={item}
            screen={'public'}
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
