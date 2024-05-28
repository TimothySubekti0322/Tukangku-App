import { View, Text, Image } from "react-native";
import React from "react";
import BOOKING_IMAGES from "../../../static/images/booking";

interface RatingReviewsCardProps {
  image: any;
  name: string;
  rating: number;
  reviews: string;
}
const RatingReviewsCard: React.FC<RatingReviewsCardProps> = ({
  image,
  name,
  rating,
  reviews,
}) => {
  return (
    <View className="w-full mt-6">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Image source={image} className="w-12 h-12" />
          <Text className="ml-4 font-InterBold">{name}</Text>
        </View>
        <View className="flex-row items-center px-2 py-1 bg-[#EFB526] rounded-xl">
          <Image source={BOOKING_IMAGES.starFillWhite} className="w-4 h-4" />
          <Text className="ml-1 text-xs text-white font-InterMedium">
            {rating}
          </Text>
        </View>
      </View>
      <Text className="text-[#7F7F7F] mt-3 font-InterMedium text-xs">
        {reviews}
      </Text>
    </View>
  );
};

export default RatingReviewsCard;
