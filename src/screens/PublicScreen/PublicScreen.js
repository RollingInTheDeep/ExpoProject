import React from "react";
import { View, FlatList } from "react-native";
import { Menu, Pressable, Box, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import MyListItem from "components/MyListItem/MyListItem";

const textList = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
  "minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
  "aliquip ex ea commodo consequat. Duis aute irure dolor in",
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla",
  "pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
];

function MyListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={textList}
        renderItem={({ item }) => <MyListItem text={item} screen={"public"} />}
        keyExtractor={(item) => item}
        windowSize={2}
      />
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Box position="relative" h={100} w="100%" alignItems="flex-end">
            <Menu
              w="190"
              closeOnSelect={false}
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

export default MyListScreen;
