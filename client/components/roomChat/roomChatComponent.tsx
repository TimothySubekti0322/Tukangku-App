import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MESSAGE_IMAGES from "../../static/images/message";
import { router } from "expo-router";

const selectImage = (name: string) => {
  switch (name) {
    case "Cameron William":
      return MESSAGE_IMAGES.cameronWilliam;
      break;
    case "Alfonzo Sander":
      return MESSAGE_IMAGES.alfonzoSander;
      break;
    case "Benny Bromo":
      return MESSAGE_IMAGES.bennyBromo;
      break;
    case "Daniel Kylee":
      return MESSAGE_IMAGES.danielKylee;
      break;
    case "Kevin Merrill":
      return MESSAGE_IMAGES.kevinMerrill;
      break;
    case "Pedro Huard":
      return MESSAGE_IMAGES.pedroHuard;
      break;
    case "Edgar Torrey":
      return MESSAGE_IMAGES.edgarTorrey;
      break;
    case "Christian Evvy":
      return MESSAGE_IMAGES.christianEvvy;
      break;
    default:
      break;
  }
};

interface RoomChatComponentProps {
  id: string;
  name: string;
  lastMessage: string;
}
const RoomChatComponent: React.FC<RoomChatComponentProps> = ({
  id,
  name,
  lastMessage,
}) => {
  return (
    <Pressable
      className="flex-row justify-between px-2 py-2 mt-4 -mx-2"
      onPress={() => router.push(`/chat/${id}`)}
      android_ripple={{ color: "#DDDDDD" }}
    >
      <View className="flex-row items-center">
        <Image
          source={selectImage(name)}
          className="w-14 h-14"
          style={{ resizeMode: "contain" }}
        />
        <View className="ml-2">
          <Text className="font-InterBold">{name}</Text>
          <Text className="mt-1">{lastMessage}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default RoomChatComponent;
