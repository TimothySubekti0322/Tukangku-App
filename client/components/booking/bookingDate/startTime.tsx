import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from "react";
import BOOKING_IMAGES from "../../../static/images/booking";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatTime } from "../../../utils/datePicker";

interface handleStartTimeProps {
  startTime: string;
  handleStartTime: (time: string) => void;
}

const StartTime: React.FC<handleStartTimeProps> = ({
  startTime,
  handleStartTime,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    const newDate = new Date(date);
    handleStartTime(formatTime(newDate.getHours(), newDate.getMinutes()));
    hideDatePicker();
  };
  return (
    <Pressable
      className="bg-white border-[1px] border-[#7D7D7D] rounded-xl flex-row items-center justify-between px-3 mt-6 py-4"
      onPress={() => showDatePicker()}
    >
      <View>
        <Text className="font-InterSemiBold">Working Hours</Text>
        <Text className="text-[#7D7D7D] text-xs">
          Cost increase after 2 hours
        </Text>
      </View>
      <Pressable
        className="flex-row items-end"
        onPress={() => showDatePicker()}
      >
        <Text className="text-xl font-InterBold">
          {startTime.split("\\s+")[0]}
        </Text>
        <Text className="ml-2 text-sm font-InterSemiBold">
          {startTime.split("\\s+")[1]}
        </Text>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </Pressable>
  );
};

export default StartTime;
