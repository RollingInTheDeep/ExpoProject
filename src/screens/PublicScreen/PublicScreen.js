/* External dependencies */
import React from "react";
import { View, FlatList, Text } from "react-native";
import { Menu, Pressable, Box, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from "@expo/vector-icons";
/* Internal dependencies */
import styles from "./style";
import ArticleItem from "../../components/PrivateItem/PrivateItem";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
const textList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
  "minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  "aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

function PublicScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <MaskedView
        style={styles.maskedView}
        maskElement={<Text style={styles.trendix}>Trendix</Text>}
      >
        <LinearGradient
          colors={["cadetblue", "#ff3399"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0, y: 3 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
      <FlatList
        data={textList}
        renderItem={({ item }) => (
          <ArticleItem text={item} screen={"public"} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item + index}
        windowSize={2}
      />
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Box position="relative" height="100" w="100%" alignItems="flex-end">
            <Menu
              w="190"
              closeOnSelect={true}
              onOpen={() => console.log("opened")}
              onClose={() => console.log("closed")}
              trigger={(triggerProps) => {
                return (
                  <Pressable {...triggerProps}>
                    <AntDesign name="filter" size={30} color="black" />
                  </Pressable>
                );
              }}
            >
              <Menu.OptionGroup
                defaultValue="Arial"
                title="Filter"
                type="radio"
              >
                <Menu.ItemOption value="Whole">Whole</Menu.ItemOption>
                <Menu.ItemOption value="MyArticle">My Article</Menu.ItemOption>
                <Menu.ItemOption value="DateAscending">
                  Date Ascending
                </Menu.ItemOption>
                <Menu.ItemOption value="DateDescending">
                  Date Descending
                </Menu.ItemOption>
                <Menu.ItemOption value="Like">Like</Menu.ItemOption>
              </Menu.OptionGroup>
            </Menu>
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  );
}

export default PublicScreen;
