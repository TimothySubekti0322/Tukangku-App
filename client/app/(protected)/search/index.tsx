import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HOME_IMAGES from "../../../static/images/home";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BASE_URL from "../../../static/API";
import Card from "../../../components/repairing/card";
import REPAIRING_IMAGES from "../../../static/images/repairing";
import { ActivityIndicator } from "react-native-paper";
import NODATA_IMAGES from "../../../static/images/noData";

interface Services {
  id: string;
  service: string;
  price: number;
  review: number;
  rating: number;
  worker: string;
}

const Search = () => {
  const textInputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const [searchText, setSearchText] = useState("");

  const [result, setResult] = useState<string>("");

  const [loading, setLoading] = useState(false);

  const [services, setServices] = useState<Services[] | null>(null);

  // Focus the TextInput when the component mounts
  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem("tokenTukangKu");
      const response = await axios.get(`${BASE_URL}/service/search`, {
        params: {
          service: searchText,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setServices(response.data.data);
      setResult(searchText);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="px-8 bg-[#FBFBFB] flex-1">
        <View
          className={`${
            isFocused
              ? "bg-[#FFF8E6] border-[#EFB526] border-[1px] "
              : "bg-[#F5F5F5]"
          } mt-6 rounded-xl justify-center py-3`}
        >
          <TextInput
            className="px-14"
            placeholder="Search"
            ref={textInputRef}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            returnKeyType="search"
            onSubmitEditing={() => handleSearch()}
          />
          <Image
            source={isFocused ? HOME_IMAGES.goldSearch : HOME_IMAGES.search}
            className="absolute w-6 h-6 left-4"
          />
          <Pressable
            className="absolute right-4"
            onPress={() => console.log("Filter Pressed")}
          >
            <Image source={HOME_IMAGES.filter} className="w-6 h-6" />
          </Pressable>
        </View>
        <ScrollView
          className="flex-1 mt-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flex: loading || services?.length === 0 ? 1 : 0,
          }}
        >
          {loading && (
            <View className="items-center justify-center flex-1">
              <ActivityIndicator size="large" color="#EFB526" />
            </View>
          )}

          {!loading && services !== null && services?.length > 0 && (
            <>
              <Text className="mb-4 text-lg font-InterSemiBold">
                Result for "<Text className="text-[#EFB526]">{result}</Text>"
              </Text>
              {services?.map((service) => (
                <Card
                  key={service.id}
                  name={service.worker}
                  title={service.service}
                  price={service.price}
                  rating={service.rating}
                  reviews={service.review}
                />
              ))}
            </>
          )}

          {!loading && services !== null && services?.length === 0 && (
            <View className="items-center justify-center flex-1 px-10 bg-[#FBFBFB]">
              <Image
                source={NODATA_IMAGES.noData}
                className="w-full"
                style={{ resizeMode: "contain" }}
              />
              <Text className="mt-3 text-2xl text-black font-InterBold">
                No Services Found
              </Text>
              <Text className="text-[#828282] text-[15px] text-center mt-3 font-InterSemiBold mb-16">
                Please try another keyword
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;
