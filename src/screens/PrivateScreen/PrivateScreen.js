/* External dependencies */
import React from "react";
import { View, FlatList } from "react-native";
import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { CommonActions } from "@react-navigation/routers";

/* Internal dependencies */
import styles from "./style";
import PrivateItem from "../../components/PrivateItem/PrivateItem";
import usePrivate from "../../hooks/usePrivate";

function PrivateScreen({ route, navigation }) {
  const folderId = route.params.folderId;
  const { privateArticleList, onCreate } = usePrivate({ folderId: folderId });

  return (
    <View style={styles.container}>
      <FlatList
        data={privateArticleList}
        renderItem={({ item }) => (
          <PrivateItem
            text={item.content}
            screen={"private"}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => item + index}
        windowSize={2}
      />
      <NativeBaseProvider>
        <Center flex={1} px="3">
          <Box position="relative" h={100} w="100%">
            <Fab
              position="absolute"
              size="sm"
              colorScheme="indigo"
              bottom={-5}
              right={0}
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
              onPress={() => {
                navigation.dispatch(
                  CommonActions.navigate({
                    name: "글 추가",
                    params: {
                      screenType: "private",
                      apiType: "post",
                      onCreate: onCreate,
                    },
                  })
                );
              }}
            />
          </Box>
        </Center>
      </NativeBaseProvider>
    </View>
  );
}

export default PrivateScreen;
