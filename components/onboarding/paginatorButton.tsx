import { Image, TouchableOpacity } from "react-native";
import React from "react";
import ONBOARDING_IMAGES from "../../static/images/onboarding";

interface PaginatorButtonProps {
  onPress: () => void;
}

const PaginatorButton: React.FC<PaginatorButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="bg-[#EFB526] absolute right-12 p-2 rounded-full -top-4"
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Image
        source={ONBOARDING_IMAGES.arrowRight}
        className="w-8 h-8"
        style={{ resizeMode: "contain" }}
      />
    </TouchableOpacity>
  );
};

export default PaginatorButton;
