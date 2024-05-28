import { View, Text, Image, Alert, Pressable, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import { Stack, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import SummaryDetailComponent from "../../../../components/booking/reviewSummary/summaryDetailComponent";
import SubmitButton from "../../../../components/booking/submitButton";
import ModalConfirmationContent from "../../../../components/booking/reviewSummary/modalConfirmationContent";
import {
  Modal,
  Portal,
  PaperProvider,
  ActivityIndicator,
} from "react-native-paper";
import { formatDayDateMonthYear } from "../../../../utils/dateFormater";
import { formatCurrency } from "../../../../utils/numberFormat";
import axios, { AxiosError, isAxiosError } from "axios";

import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../../../../static/API";
import ApplianceServices from "../applianceService";
import SingleSummaryDetailComponent from "../../../../components/booking/reviewSummary/singleSummaryDetailComponent";
import GoldSummaryDetailComponent from "../../../../components/booking/reviewSummary/goldSummaryDetailComponent";
import PaidSummaryDetailComponent from "../../../../components/booking/reviewSummary/paidSummaryDetailComponent";
import BOOKING_IMAGES from "../../../../static/images/booking";

const ReviewSummary = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const orderServiceCtx = useContext(OrderServiceContext);
  const service = orderServiceCtx.service;
  const category = orderServiceCtx.category;
  const worker = orderServiceCtx.worker;
  const date = formatDayDateMonthYear(new Date(orderServiceCtx.date));
  const time = orderServiceCtx.startTime;
  const workingHours = orderServiceCtx.workingHours;

  const applianceService = orderServiceCtx.applianceService;

  const price = formatCurrency(orderServiceCtx.price, "Rp", false, true);
  const paymentMethod = orderServiceCtx.paymentMethod;
  const promo = orderServiceCtx.promo;
  const originalPrice =
    promo > 0 ? orderServiceCtx.price + 100000 : orderServiceCtx.price;

  const bank = paymentMethod.slice(0, 3);
  const image =
    bank == "BCA"
      ? BOOKING_IMAGES.bca
      : bank == "BNI"
      ? BOOKING_IMAGES.bni
      : BOOKING_IMAGES.bri;

  const handleSubmit = async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem("tokenTukangKu");
    showModal();

    // const formData = {
    //   applianceServices: orderServiceCtx.applianceService,
    //   service: service,
    //   category: category,
    //   worker: worker,
    //   date: orderServiceCtx.date,
    //   workingHours: workingHours,
    //   startTime: time,
    //   promoCode: orderServiceCtx.promoCode,
    //   fullAddress: orderServiceCtx.fullAddress,
    //   province: orderServiceCtx.province,
    //   city: orderServiceCtx.city,
    //   subDistrict: orderServiceCtx.subDistrict,
    //   postCode: orderServiceCtx.postCode,
    //   note: orderServiceCtx.note,
    //   paymentMethod: paymentMethod,
    //   price: orderServiceCtx.price,
    // };
    // try {
    //   const response = await axios.post(`${BASE_URL}/event/create`, formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   });

    //   if (response.status == 201) {
    //     showModal();
    //   }
    // } catch (error: any | AxiosError) {
    //   if (axios.isAxiosError(error))
    //     Alert.alert("Error", error.message, [
    //       {
    //         text: "OK",
    //       },
    //     ]);
    //   else {
    //     console.log(error);
    //   }
    // } finally {
    //   setLoading(false);
    // }
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <PaperProvider>
        {/* Modal */}
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 50,
              paddingVertical: 40,
              width: "80%",
              alignSelf: "center",
              alignItems: "center",
            }}
          >
            <ModalConfirmationContent />
          </Modal>
        </Portal>
        <SafeAreaView className="bg-[#F7F7F7]" style={{ flex: 1 }}>
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ paddingHorizontal: 26 }}
          >
            <View className="mt-10">
              <HeaderBackTitle title="Summary" />
            </View>

            {/* First Summary Box */}
            <View className="bg-white border-[0.5px] border-[#7D7D7D] rounded-xl px-4 py-4 mt-6">
              <SummaryDetailComponent name="Service" value={service} />
              <SummaryDetailComponent name="Category" value={category} />
              <SummaryDetailComponent name="Worker" value={worker} />
              <SummaryDetailComponent name="date" value={date} />
              <SummaryDetailComponent name="Time" value={time} />
              <SummaryDetailComponent
                name="Working Hours"
                value={workingHours.toString()}
              />
            </View>

            {/* Second Summary Box */}
            <View className="bg-white border-[0.5px] border-[#7D7D7D] rounded-xl px-4 py-4 mt-8">
              <Text
                className="text-[#7F7F7F]"
                style={{ fontFamily: "InterSemiBold", fontSize: 15 }}
              >
                Appliance Services Details
              </Text>
              <View className="border-t-[1px] border-[#C2C2C2] mt-3"></View>
              {applianceService.map((service, index) =>
                index === 0 ? (
                  <SummaryDetailComponent
                    key={index}
                    name="Items"
                    value={service}
                  />
                ) : (
                  <SingleSummaryDetailComponent key={index} value={service} />
                )
              )}
            </View>

            {/* Third Summary Box */}
            <View className="bg-white border-[0.5px] border-[#7D7D7D] rounded-xl px-4 py-4 mt-8">
              <Text
                className="text-[#7F7F7F]"
                style={{ fontFamily: "InterSemiBold" }}
              >
                Pricing Details
              </Text>
              <View className="border-t-[1px] border-[#C2C2C2] mt-3"></View>
              <SummaryDetailComponent
                name={service}
                value={formatCurrency(originalPrice, "Rp", false, true)}
              />
              <GoldSummaryDetailComponent
                name="Promo"
                value={formatCurrency(promo, "Rp", false, true)}
              />
              <View className="border-t-[1px] border-[#C2C2C2] mt-3"></View>
              <SummaryDetailComponent name="Total" value={price} />
              <PaidSummaryDetailComponent
                image={image}
                paymentMethod={paymentMethod}
              />
            </View>

            {/* Submit Button */}
            <View className="mt-8 mb-8">
              <SubmitButton title="Confirm Order" onPress={handleSubmit} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

export default ReviewSummary;
