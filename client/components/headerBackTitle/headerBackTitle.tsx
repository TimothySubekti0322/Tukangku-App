import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import BOOKING_IMAGES from "../../static/images/booking";
import { router } from "expo-router";

interface HeaderBackTitleProps {
  title: string;
}

const HeaderBackTitle: React.FC<HeaderBackTitleProps> = ({ title }) => {
  return (
    <View className="flex-row items-center w-full">
      <Pressable onPress={() => router.back()}>
        <Image source={BOOKING_IMAGES.leftArrow} className="w-8 h-8" />
      </Pressable>
      <Text className="ml-4 text-2xl font-bold">{title}</Text>
    </View>
  );
};

export default HeaderBackTitle;
