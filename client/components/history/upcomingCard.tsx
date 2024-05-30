import { View, Text, Image, Pressable } from "react-native";
import React, { memo, useState } from "react";
import HISTORY_IMAGES from "../../static/images/history";
import StatusChip from "./statusChip";
import TextPair from "./textPair";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BASE_URL from "../../static/API";
import { router } from "expo-router";
import REPAIRING_IMAGES from "../../static/images/repairing";


const selectImage = (name: string) => {
  switch (name) {
    case "Cameron William":
      return REPAIRING_IMAGES.cameronWilliam;
      break;
    case "Alfonzo Sander":
      return REPAIRING_IMAGES.alfonzoSander;
      break;
    case "Benny Bromo":
      return REPAIRING_IMAGES.bennyBromo;
      break;
    case "Daniel Kylee":
      return REPAIRING_IMAGES.danielKylee;
      break;
    case "Kevin Merrill":
      return REPAIRING_IMAGES.kevinMerrill;
      break;
    case "Pedro Huard":
      return REPAIRING_IMAGES.pedroHuard;
      break;
    case "Edgar Torrey":
      return REPAIRING_IMAGES.edgarTorrey;
      break;
    case "Christian Evvy":
      return REPAIRING_IMAGES.christianEvvy;
      break;
  }
};

interface UpcomingCardProps {
  cardId: string;
  service: string;
  worker: string;
  date: string;
  time: string;
  location: string;
  onOpenDrawer: (id: string) => void;
}

const UpcomingCard: React.FC<UpcomingCardProps> = ({
  cardId,
  service,
  worker,
  date,
  time,
  location,
  onOpenDrawer,
}) => {
  const [expanded, setExpanded] = useState(false);

  const goToChat = async () => {
    try {
      const token = await AsyncStorage.getItem("tokenTukangKu");
      const response = await axios.get(`${BASE_URL}/roomChat/getId/${worker}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      router.push(`/chat/${response.data.data}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View className="px-4 pt-4 mt-6 bg-white border-[#7D7D7D] border-[1px] rounded-3xl">
      <View className="flex-row items-center w-full">
        <Image
          source={selectImage(worker)}
          className="w-20 h-20 rounded-xl"
          style={{ resizeMode: "contain" }}
        />
        <View className="ml-4">
          <Text className="font-InterBold">{service}</Text>
          <Text className="text-xs text-[#7F7F7F] mt-1">{worker}</Text>
          <StatusChip status="Upcoming" />
        </View>
        <Pressable
          className="rounded-full bg-[#FFF8E6] p-3 ml-auto"
          onPress={() => goToChat()}
        >
          <Image source={HISTORY_IMAGES.message} className="w-6 h-6" />
        </Pressable>
      </View>
      {/* Accordion */}
      <View className="mt-4 border-t-[1px] border-[#C2C2C2]">
        {/* Body Accordion */}
        {expanded && (
          <View className="">
            <TextPair title="Date" value={date} />
            <TextPair title="Time" value={time} />
            <TextPair title="location" value={location} />
            <View className="flex-row justify-end w-full mt-4 mb-2">
              <View className="overflow-hidden rounded-full">
                <Pressable
                  className="rounded-full border-[#EFB526] border-[2px] px-3 py-2"
                  android_ripple={{ color: "#DDDDDD" }}
                  onPress={() => onOpenDrawer(cardId)}
                >
                  <Text className="text-[#EFB526] text-xs font-InterSemiBold">
                    Cancel Booking
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
        {/* Footer Accordion */}
        <Pressable
          className="items-center w-full p-2 justify-normal"
          onPress={() => setExpanded(!expanded)}
        >
          <Image
            source={
              expanded ? HISTORY_IMAGES.chevronUp : HISTORY_IMAGES.chevronDown
            }
            className="w-6 h-6"
            style={{ resizeMode: "contain" }}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default memo(UpcomingCard);
