import { View, Text, Image } from "react-native";
import React from "react";

interface PaidSummaryDetailComponentProps {
  image: any;
  paymentMethod: string;
}

const PaidSummaryDetailComponent: React.FC<PaidSummaryDetailComponentProps> = ({
  image,
  paymentMethod,
}) => {
  return (
    <View className="flex-row items-center justify-between w-full mt-3">
      <View className="border-[1px] border-[#3EC04B] rounded-full flex-row px-2 py-[2px] items-center">
        <View className="border-[3px] border-[#3EC04B] self-center rounded-full"></View>
        <Text className="ml-1 text-[#3EC04B]">Paid</Text>
      </View>
      <View className="flex-row items-center">
        <Image source={image} className="w-10 h-10 mr-3" style={{ resizeMode: "contain" }} />
        <Text className="text-xs font-InterBold">{paymentMethod}</Text>
      </View>
    </View>
  );
};

export default PaidSummaryDetailComponent;
