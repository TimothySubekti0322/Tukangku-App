import { View, Text } from "react-native";
import React from "react";

interface LeftChatComponentProps {
  message: string;
}

const LeftChatComponent: React.FC<LeftChatComponentProps> = ({ message }) => {
  return (
    <View className="self-start bg-[#F5F5F5] rounded-r-lg rounded-bl-lg px-4 py-3 max-w-[80%] mt-5">
      <Text className="text-black">{message}</Text>
    </View>
  );
};

export default LeftChatComponent;
