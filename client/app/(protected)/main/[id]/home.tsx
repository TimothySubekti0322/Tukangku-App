import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import HOME_IMAGES from "../../../../static/images/home";
import OurServices from "../../../../components/Home/ourServices";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-paper";

const Home = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const name = await AsyncStorage.getItem("nameTukangKu");
        setName(name ?? "");
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="large" color="#EFB526" />
        </View>
      ) : (
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
                <Text className="text-black font-InterBold">
                  {name ? name : "User"}
                </Text>
              </View>
            </View>
            <Pressable onPress={() => router.push("/comingSoon/home")}>
              <Image source={HOME_IMAGES.bookmark} className="w-8 h-8" />
            </Pressable>
          </View>

          {/* Searching Section */}
          <View className="bg-[#F0F0F0] mt-6 rounded-xl justify-center py-3">
            <Pressable onPress={() => router.push("/search")}>
              <View className="flex-row items-center w-full h-8 pl-16">
                <Text className="text-[#C2C2C2]">Search</Text>
              </View>
            </Pressable>
            <Image
              source={HOME_IMAGES.search}
              className="absolute w-6 h-6 left-4"
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
            className="w-full mt-2 h-36"
            style={{ resizeMode: "contain" }}
          />

          {/* Our Services */}
          <Text className="font-InterSemiBold text-[15px] mt-4">
            Our Services
          </Text>
          <OurServices />

          {/* Most Popular services */}
          <View className="flex-row items-center justify-between mt-8">
            <Text className="font-InterSemiBold text-[15px]">
              Most Popular Services
            </Text>
            <Link href="/comingSoon/home">
              <Text className="text-[15px] font-InterSemiBold text-[#EFB526]">
                See All
              </Text>
            </Link>
          </View>

          <View className="flex-row justify-between mt-3 mb-6">
            <Pressable
              className="w-[47%] relative"
              onPress={() => router.push("/comingSoon/home")}
            >
              <Image
                source={HOME_IMAGES.houseDeepCleaning}
                className="w-full h-24"
                style={{ resizeMode: "contain" }}
              />
              <Text className="font-InterSemiBold text-[13px] mt-2">
                House Deep Cleaning
              </Text>
              <View className="absolute flex-row px-2 py-1 bg-white rounded-full left-2 top-2">
                <Image source={HOME_IMAGES.star} className="w-3 h-3" />
                <Text className="font-InterSemiBold text-[10px] ml-1">4.9</Text>
              </View>
              <View className="absolute flex-row px-2 py-1 bg-white rounded-full right-2 top-2">
                <Image source={HOME_IMAGES.bookmarkGold} className="w-3 h-3" />
              </View>
            </Pressable>
            <Pressable
              className="w-[47%]"
              onPress={() => router.push("/comingSoon/home")}
            >
              <Image
                source={HOME_IMAGES.toiletPlumbing}
                className="w-full h-24"
                style={{ resizeMode: "contain" }}
              />
              <Text className="font-InterSemiBold text-[13px] mt-2">
                Toilet Plumbing
              </Text>
              <View className="absolute flex-row px-2 py-1 bg-white rounded-full left-2 top-2">
                <Image source={HOME_IMAGES.star} className="w-3 h-3" />
                <Text className="font-InterSemiBold text-[10px] ml-1">4.9</Text>
              </View>
              <View className="absolute flex-row px-2 py-1 bg-white rounded-full right-2 top-2">
                <Image source={HOME_IMAGES.bookmarkGold} className="w-3 h-3" />
              </View>
            </Pressable>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Home;
