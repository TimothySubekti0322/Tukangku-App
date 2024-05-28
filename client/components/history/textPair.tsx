import { View, Text } from "react-native";
import React from "react";

interface TextPairProps {
  title: string;
  value: string;
}

const TextPair: React.FC<TextPairProps> = ({ title, value }) => {
  return (
    <View className="flex-row items-center justify-between w-full mt-3">
      <Text className="text-[#7F7F7F] w-12 text-xs">{title}</Text>
      <Text className="text-[#000000] font-InterMedium text-xs text-right">
        {value}
      </Text>
    </View>
  );
};

export default TextPair;
