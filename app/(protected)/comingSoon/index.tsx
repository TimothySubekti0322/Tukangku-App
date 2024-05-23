import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import COMINGSOON_IMAGE from "../../../static/images/comingSoon";
import { Stack, router } from "expo-router";

const ComingSoon = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="items-center justify-center flex-1 px-10 bg-[#FBFBFB]">
        <Image
          source={COMINGSOON_IMAGE}
          className="w-full h-80"
          style={{ resizeMode: "contain" }}
        />
        <Text className="mt-3 text-2xl text-black font-InterBold">
          Coming Soon...
        </Text>
        <Text className="text-[#828282] text-[15px] text-center mt-3 font-InterSemiBold">
          We’re still developing this part of
        </Text>
        <Text className="text-[#828282] text-[15px] text-center font-InterSemiBold mb-24">
          TukangKu, kindly wait for the update!
        </Text>

        <View className="absolute w-full overflow-hidden rounded-full bottom-20">
          <Pressable
            className="bg-[#EFB526] items-center justify-center py-4"
            android_disableSound={true}
            android_ripple={{ color: "#CD9304" }}
            onPress={() => router.push("../main")}
          >
            <Text className="text-lg text-white font-InterSemiBold">
              Back To Home
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default ComingSoon;
