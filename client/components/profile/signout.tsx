import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PROFILE_IMAGES from "../../static/images/profile";
import { router } from "expo-router";

const Signout = () => {
  const signout = async () => {
    await AsyncStorage.removeItem("tokenTukangKu");
    await AsyncStorage.removeItem("onboarded");
    router.replace("/login");
  };
  return (
    <Pressable
      className="flex-row items-center self-start px-1 py-1 mt-4 ml-1"
      android_ripple={{ color: "#EEEEEE" }}
      onPress={() => signout()}
    >
      <Image source={PROFILE_IMAGES.signout} className="w-6 h-6" />
      <Text className="ml-4 text-[15px] text-[#FF0000] font-InterSemiBold">
        Log Out
      </Text>
    </Pressable>
  );
};

export default Signout;
