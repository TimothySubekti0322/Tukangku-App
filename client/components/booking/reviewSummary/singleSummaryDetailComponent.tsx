import { View, Text } from "react-native";
import React from "react";

interface SingleSummaryDetailComponentProps {
  value: string;
}

const SingleSummaryDetailComponent: React.FC<
  SingleSummaryDetailComponentProps
> = ({ value }) => {
  return (
    <View className="flex-row justify-end w-full mt-3">
      <Text style={{ fontFamily: "InterSemiBold", fontSize: 13 }}>
        {value}
      </Text>
    </View>
  );
};

export default SingleSummaryDetailComponent;
