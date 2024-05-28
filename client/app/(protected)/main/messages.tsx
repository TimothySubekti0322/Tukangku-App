import { View, Text, Pressable } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Messages = () => {
  const router = useRouter();
  const handleSubmit = () => {
    router.replace({
      pathname: "/main",
      params: { screen: "booking" },
    });
  };
  return (
    <View className="items-center justify-center flex-1">
      <Pressable onPress={() => handleSubmit()}>
        <Text>Messages</Text>
      </Pressable>
    </View>
  );
};

export default Messages;
