import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import NODATA_IMAGES from "../../static/images/noData";

interface NoDataPageProps {
  backRoute: string;
}

const NoDataPage: React.FC<NoDataPageProps> = ({ backRoute }) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="items-center justify-center flex-1 px-10 bg-[#FBFBFB]">
        <Image
          source={NODATA_IMAGES.noData}
          className="w-full h-80"
          style={{ resizeMode: "contain" }}
        />
        <Text className="mt-3 text-2xl text-black font-InterBold">
          No Data Yet :(
        </Text>
        <Text className="text-[#828282] text-[15px] text-center mt-3 font-InterSemiBold">
          You don’t have any data here, let’s
        </Text>
        <Text className="text-[#828282] text-[15px] text-center font-InterSemiBold mb-24">
          add your first one now!
        </Text>

        <View className="absolute w-full overflow-hidden rounded-full bottom-20">
          <Pressable
            className="bg-[#EFB526] items-center justify-center py-4"
            android_disableSound={true}
            android_ripple={{ color: "#CD9304" }}
            onPress={() => router.push(backRoute)}
          >
            <Text className="text-lg text-white font-InterSemiBold">
              Go Back
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default NoDataPage;
