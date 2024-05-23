import { View, Text, Pressable } from "react-native";
import React from "react";

interface GetStartedButtonProps {
  onPress: () => void;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onPress }) => {
  return (
    <View className="pb-12 items-center justify-center">
      <View className="bg-[#EFB526] rounded-full w-3/4 overflow-hidden">
        <Pressable
          className="items-center py-4"
          android_ripple={{ color: "#CD9304" }}
          onPress={onPress}
        >
          <Text className="text-white font-InterBold text-[16px] ">
            Let’s Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GetStartedButton;
