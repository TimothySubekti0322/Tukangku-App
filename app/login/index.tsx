import {
  View,
  Text,
  Dimensions,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import AUTH_IMAGES from "../../static/images/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

  const handleLogin = async () => {
    console.log(formState);
    await AsyncStorage.setItem("tokenTukangKu", "token");
    router.replace("../main");
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
          <Text className="font-InterBold text-3xl">Log In</Text>

          {/* Email */}
          <View className="w-4/5 relative mt-12">
            <TextInput
              className="rounded-full border-[1px] border-[#4D4D4D] py-3 pl-14 pb-4"
              placeholder="Username / Email"
              onChangeText={(text) => handleChange("email", text)}
            />
            <Image
              source={AUTH_IMAGES.username}
              className="w-7 h-7 absolute top-3 left-4"
              style={{ resizeMode: "contain" }}
            />
          </View>

          {/* Password */}
          <View className="w-4/5 relative mt-8">
            <TextInput
              className="rounded-full border-[1px] border-[#4D4D4D] py-3 pl-14 pb-4"
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              onChangeText={(text) => handleChange("password", text)}
            />
            <Image
              source={AUTH_IMAGES.password}
              className="w-7 h-7 absolute top-3 left-4"
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
            className="py-3 justify-center items-center"
            android_ripple={{ color: "#CD9304" }}
            android_disableSound={true}
            onPress={() => handleLogin()}
          >
            <Text className="text-white text-lg font-InterBold">Log In</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default Login;
