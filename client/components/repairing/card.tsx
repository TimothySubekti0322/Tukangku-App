import { View, Text, Pressable, Image } from "react-native";
import React, { useContext } from "react";
import REPAIRING_IMAGES from "../../static/images/repairing";
import {
  formatCurrency,
  formatIntegerToRegularNumber,
} from "../../utils/numberFormat";
import { router } from "expo-router";
import { OrderServiceContext } from "../../store/context/orderServiceContext";

interface CardProps {
  name: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
}

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

const Card: React.FC<CardProps> = ({ name, title, price, rating, reviews }) => {
  const orderServiceCtx = useContext(OrderServiceContext);
  const pressHandler = () => {
    orderServiceCtx.setService(title);
    orderServiceCtx.setWorker(name);
    orderServiceCtx.setBasePrice(price);
    orderServiceCtx.setRating(rating);
    orderServiceCtx.setReviews(reviews);
    router.push("/booking");
  };
  return (
    <Pressable
      className="flex-row w-full p-4 mb-6 bg-white rounded-2xl"
      onPress={() => pressHandler()}
    >
      <Image
        source={selectImage(name)}
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
