import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import PROFILE_IMAGES from "../../static/images/profile";
import { router } from "expo-router";

interface MenuProps {
  image: any;
  leftText: string;
  rightText: string;
}

const Menu: React.FC<MenuProps> = ({ image, leftText, rightText }) => {
  const handlePress = () => {
    console.log("Pressed");
    router.push("/comingSoon/profile");
  };
  return (
    <Pressable
      className="flex-row items-center justify-between w-full px-1 py-4"
      android_disableSound={false}
      android_ripple={{ color: "#DDDDDD" }}
      onPress={() => handlePress()}
    >
      {/* Left */}
      <View className="flex-row items-center">
        <Image
          source={image}
          className="w-6 h-6"
          style={{ resizeMode: "contain" }}
        />
        <Text className="ml-4 text-[15px] font-InterSemiBold">{leftText}</Text>
      </View>

      {/* Right */}
      <View className="flex-row-reverse items-center">
        <Image
          source={PROFILE_IMAGES.chevronLeft}
          className="w-5 h-5"
          style={{ resizeMode: "contain" }}
        />
        <Text className="mr-3 text-[15px] text font-InterSemiBold">
          {rightText}
        </Text>
      </View>
    </Pressable>
  );
};

export default Menu;
