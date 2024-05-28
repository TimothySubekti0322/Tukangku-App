import { View, Text } from "react-native";
import React from "react";
import type { Status } from "../../store/context/orderServiceContext";

interface StatusChipProps {
  status: Status;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
  const statusColor =
    status === "Upcoming"
      ? "bg-[#EFB526]"
      : status === "Completed"
      ? "bg-[#3FAB57]"
      : "bg-[#FF0000]";

  return (
    <View className={`${statusColor} rounded-lg px-4 py-[4px] self-start mt-4`}>
      <Text className="text-[10px] text-white">{status}</Text>
    </View>
  );
};

export default StatusChip;
