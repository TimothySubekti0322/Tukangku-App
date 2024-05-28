import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import HISTORY_IMAGES from "../../static/images/history";
import StatusChip from "./statusChip";

interface CancelledCardProps {
  service: string;
  worker: string;
}

const CancelledCard: React.FC<CancelledCardProps> = ({ service, worker }) => {
  return (
    <View className="p-4  mt-6 bg-white border-[#7D7D7D] border-[1px] rounded-3xl">
      <View className="flex-row items-center w-full">
        <Image
          source={HISTORY_IMAGES.service1}
          className="w-20 h-20 rounded-xl"
          style={{ resizeMode: "contain" }}
        />
        <View className="ml-4">
          <Text className="font-InterBold">{service}</Text>
          <Text className="text-xs text-[#7F7F7F] mt-1">{worker}</Text>
          <StatusChip status="Cancelled" />
        </View>
        <Pressable className="rounded-full bg-[#FFF8E6] p-3 ml-auto">
          <Image source={HISTORY_IMAGES.message} className="w-6 h-6" />
        </Pressable>
      </View>
    </View>
  );
};

export default CancelledCard;
