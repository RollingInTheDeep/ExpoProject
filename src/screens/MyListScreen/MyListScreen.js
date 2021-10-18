/* External dependencies */
import React from "react";
import { View, FlatList } from "react-native";
import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/routers";

/* Internal dependencies */
import styles from "./styles";
import MyListItem from "components/MyListItem/MyListItem";
import usePrivate from "../../hooks/usePrivate";

function MyListScreen({ navigation }) {
  const privateArticleList = usePrivate({ folderId: 1 });

  return (
    <View style={styles.container}>
      <FlatList
        data={privateArticleList}
        renderItem={({ item }) => (
          <MyListItem
            text={item.content}
            screen={"private"}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item}
        windowSize={2}
      />
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Box position="relative" h={100} w="100%">
            <Fab
              position="absolute"
              size="sm"
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({ name: "AddItemStack" })
                );
              }}
            />
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  );
}

export default MyListScreen;
