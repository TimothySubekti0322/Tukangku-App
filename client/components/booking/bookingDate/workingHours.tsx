import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import BOOKING_IMAGES from "../../../static/images/booking";

interface WorkingHoursProps {
  handleWorkingHours: (type: string) => void;
  workingHours: number;
}

const WorkingHours: React.FC<WorkingHoursProps> = ({
  handleWorkingHours,
  workingHours,
}) => {
  return (
    <View className="bg-white border-[1px] border-[#7D7D7D] rounded-xl flex-row items-center justify-between px-3 mt-6 py-4">
      <View>
        <Text className="font-InterSemiBold">Working Hours</Text>
        <Text className="text-[#7D7D7D] text-xs">
          Cost increase after 2 hours
        </Text>
      </View>
      <View className="flex-row items-center">
        <Pressable
          className="rounded-full bg-[#FFF8E6] p-2"
          onPress={() => handleWorkingHours("minus")}
        >
          <Image source={BOOKING_IMAGES.minus} className="w-4 h-4" />
        </Pressable>
        <Text className="mx-4 text-lg tfont-InterSemiBold">{workingHours}</Text>
        <Pressable
          className="rounded-full bg-[#FFF8E6] p-2"
          onPress={() => handleWorkingHours("plus")}
        >
          <Image source={BOOKING_IMAGES.plus} className="w-4 h-4" />
        </Pressable>
      </View>
    </View>
  );
};

export default WorkingHours;
