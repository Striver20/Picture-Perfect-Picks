import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  Bars3BottomLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import TrendingMovie from "../components/TrendingMovie";
import MovieList from "../components/movieList";

const Home = () => {
  const [trending, setTrending] = useState([1, 2, 3, 4, 5, 6]);
  const [upcoming, setUpComing] = useState([1, 2, 3, 4, 5, 6]);
  const [topRated, setTopRated] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <View className="flex flex-row justify-between mx-4">
        <Bars3BottomLeftIcon color="white" size="30" strokeWidth={2} />
        <Text className="text-yellow-600 text-3xl font-bold">
          M<Text className="text-white">ovies</Text>
        </Text>
        <MagnifyingGlassIcon color="white" size="30" strokeWidth={2} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        <TrendingMovie data={trending} />
        <MovieList data={upcoming} title="Upcoming" />
        <MovieList data={topRated} title="Top Rated" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
