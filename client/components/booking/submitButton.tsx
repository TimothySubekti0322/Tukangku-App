import { View, Text, Pressable } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

interface SubmitButtonProps {
  title: string;
  onPress: () => void;
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  onPress,
  loading,
}) => {
  return (
    <View className="bg-[#EFB526] rounded-full overflow-hidden">
      <Pressable
        className="items-center justify-center py-4"
        android_disableSound={true}
        android_ripple={{ color: "#CD9304" }}
        onPress={() => onPress()}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white font-InterSemiBold">{title}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default SubmitButton;
