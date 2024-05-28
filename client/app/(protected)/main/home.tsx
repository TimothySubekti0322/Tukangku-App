import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import HOME_IMAGES from "../../../static/images/home";
import OurServices from "../../../components/Home/ourServices";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1 bg-[#FBFBFB]"
        contentContainerStyle={{ paddingHorizontal: 24 }}
      >
        {/* Header section */}
        <View className="flex-row items-center justify-between mt-6">
          <View className="flex-row items-center">
            <Image source={HOME_IMAGES.avatar} className="w-12 h-12" />
            <View className="flex-col ml-3">
              <Text className="font-InterRegular text-[#7F7F7F]">Hello,</Text>
              <Text className="font-InterBold text-black">Bobby Alexander</Text>
            </View>
          </View>
          <Image source={HOME_IMAGES.bookmark} className="w-8 h-8" />
        </View>

        {/* Searching Section */}
        <View className="bg-[#F0F0F0] mt-6 rounded-xl justify-center py-3">
          <TextInput className="px-14" placeholder="Search" />
          <Image
            source={HOME_IMAGES.search}
            className="w-6 h-6 absolute left-4"
          />
          <Pressable
            className="absolute right-4"
            onPress={() => console.log("Filter Pressed")}
          >
            <Image source={HOME_IMAGES.filter} className="w-6 h-6" />
          </Pressable>
        </View>

        {/* Special Offer */}
        <Text className="font-InterSemiBold text-[15px] mt-4">
          Special offers
        </Text>
        <Image
          source={HOME_IMAGES.banner}
          className="w-full h-36 mt-2"
          style={{ resizeMode: "contain" }}
        />

        {/* Our Services */}
        <Text className="font-InterSemiBold text-[15px] mt-4">
          Our Services
        </Text>
        <OurServices />

        {/* Most Popular services */}
        <View className="flex-row justify-between items-center mt-8">
          <Text className="font-InterSemiBold text-[15px]">
            Most Popular Services
          </Text>
          <Link href="../mostPopularServices">
            <Text className="text-[15px] font-InterSemiBold text-[#EFB526]">
              See All
            </Text>
          </Link>
        </View>

        <View className="flex-row mt-3 mb-6 justify-between">
          <View className="w-[47%] relative">
            <Image
              source={HOME_IMAGES.houseDeepCleaning}
              className="w-full h-24"
              style={{ resizeMode: "contain" }}
            />
            <Text className="font-InterSemiBold text-[13px] mt-2">
              House Deep Cleaning
            </Text>
            <View className="absolute left-2 top-2 flex-row bg-white px-2 py-1 rounded-full">
              <Image source={HOME_IMAGES.star} className="w-3 h-3" />
              <Text className="font-InterSemiBold text-[10px] ml-1">4.9</Text>
            </View>
            <View className="absolute right-2 top-2 flex-row bg-white px-2 py-1 rounded-full">
              <Image source={HOME_IMAGES.bookmarkGold} className="w-3 h-3" />
            </View>
          </View>
          <View className="w-[47%]">
            <Image
              source={HOME_IMAGES.toiletPlumbing}
              className="w-full h-24"
              style={{ resizeMode: "contain" }}
            />
            <Text className="font-InterSemiBold text-[13px] mt-2">
              Toilet Plumbing
            </Text>
            <View className="absolute left-2 top-2 flex-row bg-white px-2 py-1 rounded-full">
              <Image source={HOME_IMAGES.star} className="w-3 h-3" />
              <Text className="font-InterSemiBold text-[10px] ml-1">4.9</Text>
            </View>
            <View className="absolute right-2 top-2 flex-row bg-white px-2 py-1 rounded-full">
              <Image source={HOME_IMAGES.bookmarkGold} className="w-3 h-3" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
