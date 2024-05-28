import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import React, { useContext, useState } from "react";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import { Stack, router } from "expo-router";
import DatePicker from "../../../../components/booking/bookingDate/datePicker";
import WorkingHours from "../../../../components/booking/bookingDate/workingHours";
import StartTime from "../../../../components/booking/bookingDate/startTime";
import SubmitButton from "../../../../components/booking/submitButton";
import { formatCurrency } from "../../../../utils/numberFormat";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const initialFormData = {
  date: new Date(),
  workingHours: 1,
  startTime: "10:00 AM",
  promoCode: "",
};

const BookingDate = () => {
  const orderServiceCtx = useContext(OrderServiceContext);

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field: string, value: Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleWorkingHours = (type: string) => {
    if (type === "plus") {
      if (formData.workingHours >= 2) {
        orderServiceCtx.setPrice(orderServiceCtx.price + 100000);
      }
      setFormData((prev) => ({ ...prev, workingHours: prev.workingHours + 1 }));
    } else {
      if (formData.workingHours > 1) {
        if (formData.workingHours > 2) {
          orderServiceCtx.setPrice(orderServiceCtx.price - 100000);
        }
        setFormData((prev) => ({
          ...prev,
          workingHours: prev.workingHours - 1,
        }));
      }
    }
  };

  const handleStartTime = (time: string) => {
    setFormData((prev) => ({ ...prev, startTime: time }));
  };

  const handlePromoCode = (code: string) => {
    if (code === "promo") {
      orderServiceCtx.setPromo(100000);
      orderServiceCtx.setPrice(orderServiceCtx.price - 100000);
      setFormData((prev) => ({ ...prev, promoCode: code }));
    } else if (formData.promoCode === "promo" && code !== "promo") {
      orderServiceCtx.setPromo(0);
      orderServiceCtx.setPrice(orderServiceCtx.price + 100000);
    }
    setFormData((prev) => ({ ...prev, promoCode: code }));
  };

  const handleSubmit = () => {
    orderServiceCtx.setDate(formData.date.toString());
    orderServiceCtx.setWorkingHours(formData.workingHours);
    orderServiceCtx.setStartTime(formData.startTime);
    orderServiceCtx.setPromoCode(formData.promoCode);
    router.push("../bookingAddress");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1">
        <ScrollView
          className="flex-1 bg-[#FBFBFB]"
          contentContainerStyle={{ paddingHorizontal: 26 }}
        >
          <View className="mt-10">
            <HeaderBackTitle title="Booking Details" />
          </View>
          <Text className="mt-6">Select Date</Text>
          <DatePicker handleChange={handleChange} />
          <WorkingHours
            handleWorkingHours={handleWorkingHours}
            workingHours={formData.workingHours}
          />
          <StartTime
            startTime={formData.startTime}
            handleStartTime={handleStartTime}
          />
          {/* Promo Code */}
          <Text className="mt-36 font-InterMedium">Promo Code (optional)</Text>
          <TextInput
            className="bg-[#F5F5F5] rounded-xl py-3 px-3 mt-4"
            placeholder="Enter promo code"
            onChangeText={(text) => handlePromoCode(text)}
          />

          {/* Button Submit */}
          <View className="mt-6 mb-8">
            <SubmitButton
              title={`Continue - ${formatCurrency(
                orderServiceCtx.price,
                "Rp",
                false,
                true
              )}`}
              onPress={handleSubmit}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BookingDate;
