import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import REPAIRING_IMAGES from "../../static/images/repairing";
import {
  formatCurrency,
  formatIntegerToRegularNumber,
} from "../../utils/numberFormat";
import { router } from "expo-router";

interface CardProps {
  image: any;
  name: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

const Card: React.FC<CardProps> = ({
  image,
  name,
  title,
  price,
  rating,
  reviews,
}) => {
  const pressHandler = () => {
    if (name == "Cameron William" && title == "Appliances Services") {
      router.push("../booking");
    } else {
      router.push("../comingSoon");
    }
  };
  return (
    <Pressable
      className="flex-row w-full p-4 mb-6 bg-white rounded-2xl"
      onPress={() => pressHandler()}
    >
      <Image
        source={image}
        className="w-24 h-24 rounded 2xl"
        style={{ resizeMode: "contain" }}
      />
      <View className="ml-3">
        <Text className="text-xs text-[#7F7F7F]">{name}</Text>
        <Text className="mt-2 font-InterBold">{title}</Text>
        <Text className="font-InterBold text-[#EFB526] mt-1">
          {formatCurrency(price, "Rp", false, true)}
        </Text>
        <View className="flex-row items-center mt-2 gap-x-1">
          <Image source={REPAIRING_IMAGES.star} className="w-3 h-3" />
          <Text className="text-xs text-[#7F7F7F] font-InterMedium">
            {formatIntegerToRegularNumber(rating)}
          </Text>
          <Text className="text-xs text-[#7F7F7F] font-InterMedium">|</Text>
          <Text className="text-xs text-[#7F7F7F] font-InterMedium">
            {formatIntegerToRegularNumber(reviews)} reviews
          </Text>
        </View>
      </View>
      <Pressable className="absolute top-4 right-4">
        <Image source={REPAIRING_IMAGES.bookmark} className="w-6 h-6" />
      </Pressable>
    </Pressable>
  );
};

export default Card;
