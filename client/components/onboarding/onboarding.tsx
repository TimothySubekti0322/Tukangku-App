import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import ONBOARDING_IMAGES from "../../static/images/onboarding";

interface OnboardingProps {
  image: any;
  title1: string;
  title2: string;
  title3: string;
  description1: string;
  description2: string;
  description3: string;
}

const OnboardingComponent: React.FC<OnboardingProps> = ({
  image,
  title1,
  title2,
  title3,
  description1,
  description2,
  description3,
}) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  return (
    <View
      className="bg-white overflow-hidden items-center"
      style={{ width: width }}
    >
      <View
        className="bg-[#E3E3E3] items-center justify-center pt-52 overflow-hidden rounded-b-full"
        style={{ height: height * 0.60, width: width * 2.5 }}
      >
        <Image
          source={image}
          className="w-72"
          style={{ resizeMode: "contain" }}
        />
      </View>
      <Text className="text-2xl font-InterExtraBold w-[80%] mt-14 text-center">
        {title1} <Text className="text-[#EFB526]">{title2}</Text> {title3}
      </Text>
      <Text className="text-center w-3/4 text-[16px] text-[#7F7F7F] mt-8">
        {description1}
      </Text>
      <Text className="text-center w-3/4 text-[16px] text-[#7F7F7F]">
        {description2}
      </Text>
      <Text className="text-center w-3/4 text-[16px] text-[#7F7F7F]">
        {description3}
      </Text>
    </View>
  );
};

export default OnboardingComponent;
