import { View, Text } from "react-native";
import React from "react";

interface GoldSummaryDetailComponentProps {
  name: string;
  value: string;
}

const GoldSummaryDetailComponent: React.FC<GoldSummaryDetailComponentProps> = ({
  name,
  value,
}) => {
  return (
    <View className="flex-row justify-between w-full mt-3">
      <Text
        className="text-[#EFB526]"
        style={{ fontFamily: "InterSemiBold", fontSize: 13 }}
      >
        {name}
      </Text>
      <Text
        className="text-[#EFB526]"
        style={{ fontFamily: "InterSemiBold", fontSize: 13 }}
      >
        {value}
      </Text>
    </View>
  );
};

export default GoldSummaryDetailComponent;
