/* External dependencies */
import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Image, TextInput } from "react-native";
import TimedSlideshow from "react-native-timed-slideshow";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BlurView } from "expo-blur";
import { SearchBar } from "react-native-elements";

/* Internal dependencies */
import styles, { width, height } from "./style";
import PublicItem from "../../components/PublicItem/PublicItem";
import PublicBottomSheet from "../../components/PublicBottomSheet/PublicBottomSheet";
import usePublic from "../../hooks/usePublic";

const items = [
  {
    uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
    title: "Michael Malik",
    text: "책을 좋아하고 커피를 좋아합니다.",
    fullWidth: true,
  },
  {
    uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
    title: "Victor Fallon",
    text: "윤동주 시인의 별 헤는 밤을 좋아합니다.",
    duration: 3000,
    fullWidth: true,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: "da Gomes",
    text: "웹툰을 좋아합니다.",
    fullWidth: true,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: "Mary Gomes",
    text: "Alps",
    fullWidth: true,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: "Mary Gomes",
    text: "Alps",
    fullWidth: true,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: "Mary Gomes",
    text: "Alps",
    fullWidth: true,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: "Mary Gomes",
    text: "Alps",
    fullWidth: true,
  },
];

function PublicScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [storyIndex, setStoryIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const { publicArticleList, onCreatePublic } = usePublic();

  useEffect(() => {
    setFilteredDataSource(publicArticleList);
    setMasterDataSource(publicArticleList);
  }, [publicArticleList]);

  const closeStory = () => {
    setStoryVisible(false);
  };

  const Item = ({ item, index }) => {
    const num = index;
    return (
      <TouchableOpacity
        onPress={() => {
          setStoryIndex(num);
          setStoryVisible(true);
        }}
      >
        <Image source={{ uri: item.uri }} style={styles.profile} />
      </TouchableOpacity>
    );
  };
  const render = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity>
          <BlurView style={styles.storyHeader} tint="light" intensity={70}>
            <Text style={styles.text}>Go to Profile</Text>
          </BlurView>
        </TouchableOpacity>
        <Image style={{ width, height }} source={{ uri: item.uri }} />
      </View>
    );
  };

  const renderItem = ({ item, index }) => {
    return Item({ item, index });
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const titleData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const contentData = item.content
          ? item.content.toUpperCase()
          : "".toUpperCase();
        const hashTagData = item.hashTag
          ? item.hashTag.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return (
          titleData.indexOf(textData) > -1 ||
          contentData.indexOf(textData) > -1 ||
          hashTagData.indexOf(textData) > -1
        );
      });
      console.log(newData);
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View style={styles.storyContainer}>
      {storyVisible ? (
        <View style={styles.storyContainer}>
          <TimedSlideshow
            items={items}
            onClose={closeStory}
            index={storyIndex}
            titleStyle={styles.text}
            textStyle={styles.text}
            progressBarColor={"#ed0086"}
            loop={false}
            renderItem={render}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <MaskedView
            style={styles.maskedView}
            maskElement={<Text style={styles.trendix}>Trendix</Text>}
          >
            <LinearGradient
              colors={["#8b00ff", "#0000ff", "#ed0086"]}
              start={{ x: 1, y: 0.5 }}
              end={{ x: 0, y: 2 }}
              style={{ flex: 1 }}
            />
          </MaskedView>

          <View style={styles.list}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={(item, index) => item + index}
              horizontal={true}
              nestedScrollEnabled={true}
            />
          </View>
          <SearchBar
            round
            searchIcon={{ size: 22 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction("")}
            inputStyle={{ backgroundColor: "white", color: "black" }}
            containerStyle={{
              backgroundColor: "#e5e2e9",
              marginBottom: 3,
              borderWidth: 0,
              borderStyle: "dotted",
              borderRadius: 5,
            }}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Search"
            value={search}
          />
          <FlatList
            data={filteredDataSource}
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
          <PublicBottomSheet
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        </View>
      )}
    </View>
  );
}

export default PublicScreen;
