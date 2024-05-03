import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ImageBackground,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Photo from "../SVG/Photo.svg";
import Google from "../SVG/Google.svg";
import FaceBook from "../SVG/FaceBook.svg";
import Apple from "../SVG/Apple.svg";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function Login({ navigation }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        " https://195c-210-212-194-1.ngrok-free.app/login",
        form
      );
      console.log(response.data.message);
      if (response.data.message === "User exists") {
        navigation.navigate("Home");
      } else {
        ToastAndroid.showWithGravity(
          "User does not exist! Please Register",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
        return;
      }
    } catch (err) {
      console.log("Error checking user authentication :", err.message);
    }
  };
  const handleBack = () => {
    navigation.navigate("Welcome");
  };
  const handleSignup = () => {
    navigation.navigate("Signup");
  };
  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.photoContainer}>
        <Photo width="100%" height="100%" size="100" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Email Address</Text>
        <TextInput
          name="email"
          value={form.email}
          placeholder="john@gmail.com"
          style={styles.input}
          onChangeText={(text) => handleChange("email", text)}
        />
        <Text style={styles.text}>Password</Text>
        <TextInput
          name="password"
          value={form.password}
          placeholder="******"
          style={styles.input}
          onChangeText={(text) => handleChange("password", text)}
        />
        <TouchableOpacity className=" self-end m-2">
          <Text className="text-slate-500">Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-yellow-400 w-10/12 m-4 p-4 rounded-2xl flex items-center self-center"
          onPress={handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <Text className="self-center font-medium text-2xl mt-1">Or</Text>
        <View className="flex-row justify-center h-20 ">
          <TouchableOpacity className="w-10 h-full mx-8">
            <Google height="100%" width="100%" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-full mx-8">
            <Apple height="100%" width="100%" />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-full mx-8">
            <FaceBook height="100%" width="100%" />
          </TouchableOpacity>
        </View>
        <View className=" flex-row justify-center self-center w-3/4 ">
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text className="text-yellow-300 ml-4">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498db",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 50,
    marginLeft: 18,
  },
  backButton: {
    margin: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 300, // Adjust margin top as needed
  },
  formContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text: {
    color: "grey",
    marginLeft: 10,
  },
  input: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 10,
    marginBottom: 10,
  },
});
