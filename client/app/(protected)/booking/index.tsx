import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useContext, useState } from "react";
import { Link, Stack, router } from "expo-router";
import BOOKING_IMAGES from "../../../static/images/booking";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ReadMore from "@fawazahmed/react-native-read-more";
import RatingReviewsCard from "../../../components/booking/mainSection/ratingReviewsCard";
import { OrderServiceContext } from "../../../store/context/orderServiceContext";

const Booking = () => {
  const orderServiceCtx = useContext(OrderServiceContext);

  const inset = useSafeAreaInsets();

  const [aboutMeExpanded, setAboutMeExpanded] = useState(false);

  const width = Dimensions.get("window").width;

  const handleBookNow = () => {
    orderServiceCtx.setService("Appliance Services");
    orderServiceCtx.setCategory("Repairing");
    orderServiceCtx.setWorker("Cameron William");

    router.push("./applianceService");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <ScrollView>
        {/* Main Image */}
        <Image
          source={BOOKING_IMAGES.mainPicture}
          className="w-full h-80"
          style={{ resizeMode: "contain", marginTop: -inset.top }}
        />

        {/* Back Button */}
        <Pressable
          className="absolute top-12 left-6"
          onPress={() => router.back()}
        >
          <Image source={BOOKING_IMAGES.whiteLeftArrow} className="w-7 h-7" />
        </Pressable>

        {/* Main Body */}
        <View className="px-6">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-InterBold">Appliance Services</Text>
            <Image source={BOOKING_IMAGES.bookmark} className="w-7 h-7" />
          </View>

          <View className="flex-row items-center mt-2">
            <Text className="text-[#EFB526] font-InterBold text-[15px]">
              Cameron William
            </Text>
            <Image
              source={BOOKING_IMAGES.starHalfGold}
              className="w-4 h-4 ml-2"
            />
            <Text className="text-[#7F7F7F] ml-1 text-xs font-InterSemiBold">
              4.8
            </Text>
            <Text className="text-[#7F7F7F] ml-1 text-xs font-InterSemiBold">
              (8.992 reviews)
            </Text>
          </View>

          <View className="flex-row items-center mt-3">
            <View className="rounded-xl bg-[#EFB526] px-3 py-1">
              <Text className="text-xs text-white text-[10px]">Repairing</Text>
            </View>
            <Image source={BOOKING_IMAGES.location} className="w-6 h-6 ml-2" />
            <Text className="text-xs font-InterSemiBold text-[#7F7F7F] ml-1">
              Jl. Sangkuriang No. 13, Dago, Bandung
            </Text>
          </View>

          <View className="flex-row items-center w-full border-b-2 border-[#C2C2C2] mt-3 pb-4">
            <Text className="text-[#EFB526] font-InterBold text-xl">
              Rp 400.000
            </Text>
            <Text className="font-InterSemiBold text-[#7F7F7F] ml-3">
              (Floor Price)
            </Text>
          </View>

          {/* About Me */}
          <Text className="mt-6 text-[15px] font-InterBold">About Me</Text>

          <ReadMore
            numberOfLines={3}
            style={{ color: "#7F7F7F" }}
            seeMoreStyle={{ color: "#EFB526" }}
            seeLessStyle={{ color: "#EFB526" }}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"
            }
          </ReadMore>

          {/* Photo */}
          <Text className="mt-6 text-[15px] font-InterBold">Photos</Text>

          <View className="flex-row items-center justify-between">
            <Image
              source={BOOKING_IMAGES.image1}
              className="rounded-xl"
              style={{
                width: (width - 48) * 0.48,
                height: (width - 48) * 0.48,
                resizeMode: "contain",
              }}
            />
            <View>
              <Image
                source={BOOKING_IMAGES.image2}
                className="rounded-xl"
                style={{
                  width: (width - 48) * 0.48,
                  height: (width - 48) * 0.48 * 0.48,
                  resizeMode: "contain",
                }}
              />
              <Image
                source={BOOKING_IMAGES.image3}
                className="rounded-xl"
                style={{
                  width: (width - 48) * 0.48,
                  height: (width - 48) * 0.48 * 0.48,
                  resizeMode: "contain",
                }}
              />
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <View>
              <Image
                source={BOOKING_IMAGES.image4}
                className="rounded-xl"
                style={{
                  width: (width - 48) * 0.48,
                  height: (width - 48) * 0.48 * 0.48,
                  resizeMode: "contain",
                }}
              />
              <Image
                source={BOOKING_IMAGES.image5}
                className="rounded-xl"
                style={{
                  width: (width - 48) * 0.48,
                  height: (width - 48) * 0.48 * 0.48,
                  resizeMode: "contain",
                }}
              />
            </View>
            <Image
              source={BOOKING_IMAGES.image6}
              className="rounded-xl"
              style={{
                width: (width - 48) * 0.48,
                height: (width - 48) * 0.48,
                resizeMode: "contain",
              }}
            />
          </View>

          {/* Rating and Review */}
          <Text className="mt-6 text-[15px] font-InterBold">
            Rating and Reviews
          </Text>

          <View className="flex-row items-center justify-between mt-3">
            <View className="flex-row items-center">
              <Image source={BOOKING_IMAGES.starHalfGold} className="w-4 h-4" />
              <Text className="ml-1 font-InterMedium">4.8</Text>
              <Text className="ml-1 font-InterMedium">(8.992 reviews)</Text>
            </View>
            <Pressable>
              <Text className="font-InterBold text-[#EFB526]">See All</Text>
            </Pressable>
          </View>

          {/* Ratings & Reviews Card */}

          <RatingReviewsCard
            image={BOOKING_IMAGES.lauraLee}
            name="Laura Lee"
            rating={4.9}
            reviews="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <RatingReviewsCard
            image={BOOKING_IMAGES.clintonSander}
            name="Clinton Sander"
            rating={4.9}
            reviews="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <RatingReviewsCard
            image={BOOKING_IMAGES.alexaChu}
            name="Alexa Chu"
            rating={4.9}
            reviews="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />

          {/* Message and Book Now Button */}
          <View className="flex-row items-center justify-between mt-6 mb-8">
            <View className="bg-[#FFF8E6] w-[48%] rounded-full overflow-hidden">
              <Pressable
                className="items-center justify-center py-3"
                android_disableSound={true}
                android_ripple={{ color: "#DDD6C4" }}
              >
                <Text className="text-[#EFB526] font-InterBold">Message</Text>
              </Pressable>
            </View>

            <View className="bg-[#EFB526] w-[48%] rounded-full overflow-hidden">
              <Pressable
                className="items-center justify-center py-3"
                android_disableSound={true}
                android_ripple={{ color: "#CD9304" }}
                onPress={() => handleBookNow()}
              >
                <Text className="text-white font-InterBold">Book Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Booking;
