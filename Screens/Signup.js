import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SignupSvg from "../SVG/SignupSvg.svg";
import Google from "../SVG/Google.svg";
import FaceBook from "../SVG/FaceBook.svg";
import Apple from "../SVG/Apple.svg";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import axios from "axios";

export default function Signup({ navigation }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleRegister = async () => {
    console.log(form.username, form.email, form.password);
    if (form.password.length <= 4)
      ToastAndroid.showWithGravity(
        "Length of password must be greater than 4",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      ToastAndroid.showWithGravity(
        "Invalid email format",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      return;
    }

    try {
      const response = await axios.post(
        " https://7914-210-212-194-1.ngrok-free.app/signup",
        form
      );
      if (response.status === 200) {
        console.log("send perfectly");
        navigation.navigate("Home");
      } else if (response.status === 400) {
        console.log("User already exists");
      } else console.log("Invalid response");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          console.log("Server responded with:", err.response.data);
        } else if (err.request) {
          console.log("No response received:", err.request);
        } else {
          console.log("Error setting up request:", err.message);
        }
      } else {
        console.log("Other error occurred:", err.message);
      }
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardDismissMode="on-drag"
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: "#3498db" }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Ionicons name="arrow-back-outline" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.photoContainer}>
          <SignupSvg width="100%" height="100%" size="100" />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.text}>UserName</Text>
          <TextInput
            name="username"
            value={form.username}
            placeholder="john doe"
            style={styles.input}
            onChangeText={(text) => handleChange("username", text)}
          />
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

          <TouchableOpacity
            className="bg-yellow-400 w-10/12 mt-6  p-4 rounded-2xl flex items-center self-center"
            onPress={handleRegister}
          >
            <Text>Register</Text>
          </TouchableOpacity>
          <Text className="self-center font-medium text-2xl mt-2">Or</Text>
          <View className="flex-row justify-center h-16 ">
            <TouchableOpacity className="w-10 h-full mx-8">
              <Google height="100%" width="100%" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-full mx-8">
              <Apple height="100%" width="100%" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-full mx-2">
              <FaceBook height="100%" width="100%" />
            </TouchableOpacity>
          </View>
          <View className=" flex-row justify-center self-center w-3/4">
            <Text>Already have an account?</Text>
            <TouchableOpacity>
              <Text className="text-yellow-300 ml-4" onPress={handleLogin}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
    height: 280, // Adjust margin top as needed
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
