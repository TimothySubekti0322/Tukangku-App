import { View, Text, Image } from "react-native";
import React from "react";
import NODATA_IMAGES from "../../static/images/noData";

const NoDataWithoutButton = () => {
  return (
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
      <Text className="text-[#828282] text-[15px] text-center font-InterSemiBold">
        add your first one now!
      </Text>
    </View>
  );
};

export default NoDataWithoutButton;
