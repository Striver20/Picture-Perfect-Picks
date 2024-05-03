import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import WelcomeSvg from "../SVG/WelcomeSvg";

export default function Welcome({ navigation }) {
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View className="flex bg-blue-400 h-full">
      <View className="flex justify-center items-center mt-40 ">
        <Text className=" text-3xl font-bold text-white">
          Let's Get Started!
        </Text>
      </View>

      <View className="flex justify-center items-center w-full h-2/5 mt-10 mb-20">
        <WelcomeSvg width="100%" height="100%" />
      </View>

      <View className="mt-10 flex">
        <TouchableOpacity
          className="flex-row justify-center self-center bg-yellow-300 w-3/4 rounded-xl h-12"
          onPress={handleSignup}
        >
          <Text className="text-blue-900 text-opacity-5 font-semibold self-center">
            Sign up
          </Text>
        </TouchableOpacity>

        <View className="mt-2 flex-row items-center justify-center">
          <Text className="text-sm text-white">Already have an Account?</Text>
          <TouchableOpacity>
            <Text className="text-yellow-300 mx-2">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
