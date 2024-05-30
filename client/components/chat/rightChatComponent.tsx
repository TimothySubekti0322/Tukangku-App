import { View, Text } from "react-native";
import React from "react";

interface RightChatComponentProps {
  message: string;
}

const RightChatComponent: React.FC<RightChatComponentProps> = ({ message }) => {
  return (
    <View className="self-end bg-[#EFB526] rounded-l-lg rounded-br-lg px-4 py-3 max-w-[80%] mt-5">
      <Text className="text-white">{message}</Text>
    </View>
  );
};

export default RightChatComponent;
