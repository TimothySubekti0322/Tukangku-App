import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import HOME_IMAGES from "../../static/images/home";
import { router } from "expo-router";

const OurServices = () => {
  const goToRepair = () => {
    router.push("/repair");
  };

  const goToComingSoon = () => {
    router.push("/comingSoon/home");
  };
  return (
    <>
      {/* Row 1 */}
      <View className="flex-row justify-between w-full mt-4">
        <View className="items-center">
          <Pressable
            className="bg-[#FFF7EF] rounded-full p-3"
            onPress={() => goToRepair()}
          >
            <Image
              source={HOME_IMAGES.repairing}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Repairing</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#F5EDFF] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.cleaning}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Cleaning</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#EFF4FE] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.painting}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Painting</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#F5F5F5] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.plumbing}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Plumbing</Text>
        </View>
      </View>

      {/* Row 2 */}
      <View className="flex-row justify-between w-full mt-4">
        <View className="items-center">
          <Pressable
            className="bg-[#FDF3F0] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.electrician}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Electrician</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#ECF7FE] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.shifting}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Shifting</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#F5EDFF] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.vehicle}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Vehicle</Text>
        </View>
        <View className="items-center">
          <Pressable
            className="bg-[#FFF7EF] rounded-full p-3"
            onPress={() => goToComingSoon()}
          >
            <Image
              source={HOME_IMAGES.electronics}
              className="w-7 h-7"
              style={{ resizeMode: "contain" }}
            />
          </Pressable>
          <Text className="mt-1 text-xs font-InterBold">Electronic</Text>
        </View>
      </View>
    </>
  );
};

export default OurServices;
