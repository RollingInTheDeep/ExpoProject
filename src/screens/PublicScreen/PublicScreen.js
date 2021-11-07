/* External dependencies */
import React, { useState } from 'react';

import { View, FlatList, Text } from 'react-native';
import { Menu, Pressable, Box, Center, NativeBaseProvider } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
/* Internal dependencies */
import styles from './style';
import PublicItem from '../../components/PublicItem/PublicItem';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import PublicBottomSheet from '../../components/PublicBottomSheet/PublicBottomSheet';

const textList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
  'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  'aliquip ex ea commodo consequat. Duis aute irure dolor in',
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
];

function PublicScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={<Text style={styles.trendix}>Trendix</Text>}
      >
        <LinearGradient
          colors={['#8b00ff', '#0000ff', '#ed0086']}
          start={{ x: 1, y: 0.5 }}
          end={{ x: 0, y: 2 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
      <View style={styles.list}>
        <FlatList
          //  data={hashItem}
          // renderItem={renderItem}
          keyExtractor={(item, index) => item + index}
          horizontal={true}
          nestedScrollEnabled={true}
        />
      </View>
      <FlatList
        data={textList}
        renderItem={({ item }) => (
          <PublicItem
            text={item}
            screen={'public'}
            navigation={navigation}
            setModalVisible={setModalVisible}
          />
        )}
        keyExtractor={(item, index) => item + index}
        windowSize={2}
      />
      <PublicBottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

export default PublicScreen;
