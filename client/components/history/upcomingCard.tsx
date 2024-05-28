import { View, Text, Image, Pressable } from "react-native";
import React, { memo, useState } from "react";
import HISTORY_IMAGES from "../../static/images/history";
import StatusChip from "./statusChip";
import TextPair from "./textPair";

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
  return (
    <View className="px-4 pt-4 mt-6 bg-white border-[#7D7D7D] border-[1px] rounded-3xl">
      <View className="flex-row items-center w-full">
        <Image
          source={HISTORY_IMAGES.service1}
          className="w-20 h-20 rounded-xl"
          style={{ resizeMode: "contain" }}
        />
        <View className="ml-4">
          <Text className="font-InterBold">{service}</Text>
          <Text className="text-xs text-[#7F7F7F] mt-1">{worker}</Text>
          <StatusChip status="Upcoming" />
        </View>
        <Pressable className="rounded-full bg-[#FFF8E6] p-3 ml-auto">
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
