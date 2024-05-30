import { View, Text, ScrollView, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Stack, router } from "expo-router";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import BookingAddressInput from "../../../../components/booking/bookingAddress/bookingAddressInput";
import SubmitButton from "../../../../components/booking/submitButton";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";

const initialFormData = {
  fullAddress: "",
  province: "",
  city: "",
  subDistrict: "",
  postCode: "",
  note: "",
};

const BookingAddress = () => {
  const orderServiceCtx = useContext(OrderServiceContext);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (
      !formData.fullAddress ||
      !formData.province ||
      !formData.city ||
      !formData.subDistrict ||
      !formData.postCode
    ) {
      console.log("Please fill all the form!");
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "WARNING",
        textBody: "Please fill all the form!",
        button: "ok",
        closeOnOverlayTap: false,
      });
    } else {
      orderServiceCtx.setFullAddress(formData.fullAddress);
      orderServiceCtx.setProvince(formData.province);
      orderServiceCtx.setCity(formData.city);
      orderServiceCtx.setSubDistrict(formData.subDistrict);
      orderServiceCtx.setPostCode(formData.postCode);
      orderServiceCtx.setNote(formData.note);
      router.push("../paymentMethod");
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AlertNotificationRoot>
        <SafeAreaView className="flex-1 bg-[#FBFBFB]">
          <ScrollView className="flex-1" style={{ paddingHorizontal: 26 }}>
            <View className="mt-10">
              <HeaderBackTitle title="Booking Details" />
            </View>
            <Text className="mt-6 font-InterBold">set Address</Text>

            {/* Input Section */}
            <BookingAddressInput
              title="Full Address"
              onChange={handleChange}
              name="fullAddress"
              placeholder="Enter Full Address"
            />
            <BookingAddressInput
              title="Province"
              onChange={handleChange}
              name="province"
              placeholder="Enter Province"
            />
            <BookingAddressInput
              title="City"
              onChange={handleChange}
              name="city"
              placeholder="Enter City"
            />
            <BookingAddressInput
              title="Subdistrict"
              onChange={handleChange}
              name="subDistrict"
              placeholder="Enter Subdistrict"
            />
            <BookingAddressInput
              title="Post Code"
              onChange={handleChange}
              name="postCode"
              placeholder="Enter Post Code"
            />
            <BookingAddressInput
              title="Note (optional)"
              onChange={handleChange}
              name="note"
              placeholder="Enter Note"
            />

            {/* Button Section */}
            <View className="mt-16 mb-8">
              <SubmitButton
                title="Continue"
                onPress={handleSubmit}
                loading={false}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </AlertNotificationRoot>
    </>
  );
};

export default BookingAddress;
