import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";

export default function MovieScreen() {
  const { params: item } = useRoute();
  useEffect(() => {}, [item]);
  const { height, width } = useWindowDimensions();
  return (
    <View className=" flex-1 bg-neutral-800">
      <StatusBar style="light" />
      <Image
        source={require("../assets/Avengers.jpg")}
        className="object-cover content-center"
      ></Image>
      <View className="flex flex-row justify-between mx-4 mt-10 absolute top-0 left-0 right-0 z-10">
        <TouchableOpacity className="bg-yellow-600 rounded-lg p-1">
          <ChevronLeftIcon
            size="30"
            color="white"
            strokeWidth={2}
            className="z-20 top-0 left-0"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeartIcon
            size="35"
            color="white"
            strokeWidth={2}
            className="z-20 top-10 right-0"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
