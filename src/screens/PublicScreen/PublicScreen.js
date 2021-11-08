/* External dependencies */
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { Menu, Pressable, Box, Center, NativeBaseProvider } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
/* Internal dependencies */
import styles from './styles';
import ArticleItem from '../../components/PrivateItem/PrivateItem';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
const textList = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do',
  'minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
  'aliquip ex ea commodo consequat. Duis aute irure dolor in',
  'reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
  'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
];

function PublicScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={<Text style={styles.trendix}>Trendix</Text>}
      >
        <LinearGradient
          colors={['cadetblue', '#ff3399']}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0, y: 3 }}
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
          <ArticleItem text={item} screen={'public'} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item + index}
        windowSize={2}
      />
    </View>
  );
}

export default PublicScreen;
