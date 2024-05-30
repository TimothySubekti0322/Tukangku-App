import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import AUTH_IMAGES from "../../static/images/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import BASE_URL from "../../static/API";
import { ActivityIndicator } from "react-native-paper";

const intialFormState = {
  email: "",
  password: "",
};

const Login = () => {
  const width = Dimensions.get("window").width;

  const [formState, setFormState] = useState(intialFormState);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setEmailError("");
    setPasswordError("");
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, formState);
      console.log(response.data.message);
      if (response.data.status === 200) {
        await AsyncStorage.setItem("tokenTukangKu", response.data.token);
        await AsyncStorage.setItem("nameTukangKu", response.data.payload.name);
        await AsyncStorage.setItem(
          "emailTukangKu",
          response.data.payload.email
        );
        router.replace({
          pathname: "/main/home",
        });
      } else if (response.data.message == "Password is required") {
        console.log("Masuk sini");
        setPasswordError("Password is required");
      } else if (response.data.message == "Email is required") {
        setEmailError("Email is required");
      } else if (response.data.message == "User not found") {
        setEmailError("Email is not registered");
      } else if (response.data.message == "Wrong Password") {
        setPasswordError("Wrong Password");
      }
    } catch (error: any | AxiosError) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 justify-between items-center overflow-hidden pb-16 bg-[#FBFBFB]">
        {/* Header Section */}
        <View
          className="rounded-b-full bg-[#F9D03C] items-center pt-8 pb-6"
          style={{ width: width * 1.3 }}
        >
          <Image
            source={AUTH_IMAGES.icon}
            className="w-36 h-36"
            style={{ resizeMode: "contain" }}
          />
        </View>

        {/* Body */}
        <View className="items-center w-full">
          <Text className="text-3xl font-InterBold">Log In</Text>

          {/* Email */}
          <View className="relative w-4/5 mt-12">
            <TextInput
              className={`${
                emailError !== "" ? "border-red-500" : "border-[#4D4D4D]"
              } rounded-full border-[1px]  py-3 pl-14 pb-4`}
              placeholder="Username / Email"
              onChangeText={(text) => handleChange("email", text)}
            />
            <Image
              source={AUTH_IMAGES.username}
              className="absolute w-7 h-7 top-3 left-4"
              style={{ resizeMode: "contain" }}
            />
            {emailError !== "" && (
              <Text className="self-start mt-1 ml-2 text-red-500">
                {emailError}
              </Text>
            )}
          </View>

          {/* Password */}
          <View className="relative w-4/5 mt-8">
            <TextInput
              className={`${
                passwordError !== "" ? "border-red-500" : "border-[#4D4D4D]"
              } rounded-full border-[1px] py-3 pl-14 pb-4`}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              onChangeText={(text) => handleChange("password", text)}
            />
            <Image
              source={AUTH_IMAGES.password}
              className="absolute w-7 h-7 top-3 left-4"
              style={{ resizeMode: "contain" }}
            />
            <Pressable
              className="absolute top-3 right-6"
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <Image
                  source={AUTH_IMAGES.eyeOpened}
                  className="w-7 h-7"
                  style={{ resizeMode: "contain" }}
                />
              ) : (
                <Image
                  source={AUTH_IMAGES.eyeClosed}
                  className="w-7 h-7"
                  style={{ resizeMode: "contain" }}
                />
              )}
            </Pressable>
            {passwordError !== "" && (
              <Text className="mt-1 ml-2 text-red-500">{passwordError}</Text>
            )}
            <View className="flex-row items-center justify-center w-full mt-4 mb-8">
              <Text>Don't have an account? </Text>
              <Link href="../register">
                <Text className="text-[#EFB526] font-InterBold underline">
                  Register
                </Text>
              </Link>
            </View>
          </View>
        </View>

        {/* Login Button */}
        <View className="w-4/5 bg-[#EFB526] rounded-full overflow-hidden">
          <Pressable
            className="items-center justify-center py-3"
            android_ripple={{ color: "#CD9304" }}
            android_disableSound={true}
            onPress={() => handleLogin()}
          >
            {loading ? (
              <ActivityIndicator animating={true} />
            ) : (
              <Text className="text-lg text-white font-InterBold">Log In</Text>
            )}
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Login;
