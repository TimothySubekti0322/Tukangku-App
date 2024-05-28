import { Text, Pressable, Image } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";
import { ApplianceServiceKeys } from "../../../app/(protected)/booking/applianceService";
import BOOKING_IMAGES from "../../../static/images/booking";

interface ApplianceServicesCardProps {
  title: string;
  name: ApplianceServiceKeys;
  checked: boolean;
  handleChange: (key: ApplianceServiceKeys) => void;
}

const ApplianceServicesCard: React.FC<ApplianceServicesCardProps> = ({
  title,
  name,
  checked,
  handleChange,
}) => {
  return (
    <Pressable
      className="bg-white border-[1px] border-[#7D7D7D] rounded-xl flex-row items-center justify-between px-3 mt-4 py-4"
      onPress={() => handleChange(name)}
    >
      <Text className="font-InterSemiBold">{title}</Text>

      <Pressable
        className={`${
          checked ? "bg-[#EFB526]" : "bg-white"
        } w-6 h-6 rounded-full border-[#EFB526] border-2 items-center justify-center`}
        onPress={() => handleChange(name)}
      >
        {checked && (
          <Image
            source={BOOKING_IMAGES.check}
            className="w-4 h-4"
            style={{ resizeMode: "contain" }}
          />
        )}
      </Pressable>
    </Pressable>
  );
};

export default ApplianceServicesCard;
