import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  ToastAndroid,
} from "react-native";
import React, { useContext } from "react";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import { Stack, router } from "expo-router";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import BOOKING_IMAGES from "../../../../static/images/booking";
import AccordionVA from "../../../../components/booking/confirmPayment/accordionVA";
import SubmitButton from "../../../../components/booking/submitButton";
import * as Clipboard from "expo-clipboard";
import { formatCurrency } from "../../../../utils/numberFormat";

const ConfirmPayment = () => {
  const orderServiceCtx = useContext(OrderServiceContext);
  const paymentMethodCtx = orderServiceCtx.paymentMethod;
  const bank = paymentMethodCtx.slice(0, 3);
  const paymentMethod = paymentMethodCtx.slice(3);
  const price = formatCurrency(orderServiceCtx.price, "Rp", false, true);

  const copyToClipboard = async () => {
    ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    await Clipboard.setStringAsync("123 456 789 1011");
  };

  const handleSubmit = () => {
    router.push("../reviewSummary");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-[#F9F9F9]">
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 26 }}
        >
          <View className="mt-16">
            <HeaderBackTitle title="Confirm payment" />
          </View>
          <Text className="mt-6 font-InterSemiBold" style={{ fontSize: 15 }}>
            Lengkapi Pembayaran
          </Text>
          <View className="px-4 py-4 bg-white border-[0.5px] rounded-xl border-[#7D7D7D] mt-3">
            <Text className="font-InterMedium">Transfer to</Text>
            <View className="flex-row items-center">
              {bank === "BCA" && (
                <Image
                  source={BOOKING_IMAGES.bca}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              {bank === "BNI" && (
                <Image
                  source={BOOKING_IMAGES.bni}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              {bank === "BRI" && (
                <Image
                  source={BOOKING_IMAGES.bri}
                  style={{ resizeMode: "contain" }}
                  className="w-16"
                />
              )}
              <Text className="ml-3">{orderServiceCtx.paymentMethod}</Text>
            </View>
            <View className="flex-row items-center justify-between px-4 py-3 bg-[#FFF8E6] border-[1px] border-[#E9A400] rounded-xl">
              <Text className="font-InterBold">123 456 789 1011</Text>
              <Pressable onPress={() => copyToClipboard()}>
                <Image
                  source={BOOKING_IMAGES.copy}
                  style={{ resizeMode: "contain" }}
                  className="w-6 h-6"
                />
              </Pressable>
            </View>
            <View className="w-full border-t-[1px] border-[#C2C2C2] mt-4"></View>
            {/* Total Payment */}
            <Text className="mt-4 font-InterSemiBold">Total Payment</Text>
            <Text className="text-[#690895] text-xl mt-1 font-InterSemiBold">
              {price}
            </Text>
          </View>

          {/* Virtual Account */}
          <Text
            className="mt-8 mb-4 font-InterSemiBold"
            style={{ fontSize: 15 }}
          >
            {paymentMethod}
          </Text>
          <AccordionVA bank={bank} />
          <View className="mt-16 mb-8">
            <SubmitButton
              title="Confirm Payment"
              onPress={handleSubmit}
              loading={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ConfirmPayment;
