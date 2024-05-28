import { View, Text } from "react-native";
import React from "react";

interface SummaryDetailComponentProps {
  name: string;
  value: string;
}

const SummaryDetailComponent: React.FC<SummaryDetailComponentProps> = ({
  name,
  value,
}) => {
  return (
    <View className="flex-row justify-between w-full mt-3">
      <Text
        className="text-[#7F7F7F]"
        style={{ fontFamily: "InterSemiBold", fontSize: 13 }}
      >
        {name}
      </Text>
      <Text style={{ fontFamily: "InterSemiBold", fontSize: 13 }}>{value}</Text>
    </View>
  );
};

export default SummaryDetailComponent;
