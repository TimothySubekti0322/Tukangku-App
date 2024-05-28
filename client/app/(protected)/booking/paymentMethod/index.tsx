import { View, Text, ScrollView, Pressable, Image } from "react-native";
import React, { useContext, useState } from "react";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import BOOKING_IMAGES from "../../../../static/images/booking";
import SubmitButton from "../../../../components/booking/submitButton";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import PaymentMethodCard from "../../../../components/booking/paymentMethod/paymentMethodCard";

const PaymentMethod = () => {
  const orderServiceCtx = useContext(OrderServiceContext);

  const [metodePembayaran, setMetodePembayaran] = useState<string>("");
  const handleSubmit = () => {
    orderServiceCtx.setPaymentMethod(metodePembayaran);
    router.push("../confirmPayment");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-[#FBFBFB]">
        <ScrollView
          className="flex-1"
          style={{ paddingHorizontal: 26 }}
          contentContainerStyle={{ flex: 1 }}
        >
          <View className="mt-10">
            <HeaderBackTitle title="Payment Methods" />
          </View>
          <Text className="mt-6 mb-4 font-InterRegular">
            Select the payment method you want to use
          </Text>

          {/* Option */}
          <View className="justify-between flex-1">
            <View>
              <PaymentMethodCard
                title="Bank Transfer (BCA)"
                value="BCA Bank Transfer"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bca}
              />
              <PaymentMethodCard
                title="Bank Transfer (BNI)"
                value="BNI Bank Transfer"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bni}
              />
              <PaymentMethodCard
                title="Bank Transfer (BRI)"
                value="BRI Bank Transfer"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bri}
              />
              <PaymentMethodCard
                title="Virtual Account (BCA)"
                value="BCA Virtual Account"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bca}
              />
              <PaymentMethodCard
                title="Virtual Account (BNI)"
                value="BNI Virtual Account"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bni}
              />
              <PaymentMethodCard
                title="Virtual Account (BRI)"
                value="BRI Virtual Account"
                metodePembayaran={metodePembayaran}
                setMetodePembayaran={setMetodePembayaran}
                image={BOOKING_IMAGES.bri}
              />
            </View>

            <View className="mb-4">
              <SubmitButton title="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PaymentMethod;
