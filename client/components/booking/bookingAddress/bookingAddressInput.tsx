import { View, Text, TextInput } from "react-native";
import React from "react";

interface BookingAddressInputProps {
  title: string;
  onChange: (field: string, value: string) => void;
  name: string;
  placeholder: string;
}

const BookingAddressInput: React.FC<BookingAddressInputProps> = ({
  title,
  onChange,
  name,
  placeholder,
}) => {
  return (
    <View className="mt-6">
      <Text>{title}</Text>
      <TextInput
        onChangeText={(text) => onChange(name, text)}
        className="border-[1px] border-[#7D7D7D] rounded-xl px-3 py-4 mt-2"
        placeholder={placeholder}
      />
    </View>
  );
};

export default BookingAddressInput;
