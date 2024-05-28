import { View, Text, Pressable } from "react-native";
import React from "react";

interface SubmitButtonProps {
  title: string;
  onPress: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title, onPress }) => {
  return (
    <View className="bg-[#EFB526] rounded-full overflow-hidden">
      <Pressable
        className="items-center justify-center py-4"
        android_disableSound={true}
        android_ripple={{ color: "#CD9304" }}
        onPress={() => onPress()}
      >
        <Text className="text-white font-InterSemiBold">{title}</Text>
      </Pressable>
    </View>
  );
};

export default SubmitButton;
