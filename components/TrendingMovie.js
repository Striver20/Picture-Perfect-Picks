import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

const TrendingMovie = ({ data }) => {
  const navigation = useNavigation();
  const handleClick = (item) => {
    navigation.navigate("Movie", item);
  };
  const { height, width } = useWindowDimensions();
  return (
    <View>
      <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={() => handleClick(item)} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
};

const MovieCard = ({ item, handleClick }) => {
  const { height, width } = useWindowDimensions();
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require("../assets/AvengerEndGame.png")}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default TrendingMovie;

const styles = StyleSheet.create({});
