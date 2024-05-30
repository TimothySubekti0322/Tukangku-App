import { Text, Image, View, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import BOOKING_IMAGES from "../../../static/images/booking";

const ModalConfirmationContent = () => {
  const handleSubmit = () => {
    router.replace({
      pathname: "/main/home",
      params: { screen: "booking" },
    });
  };
  return (
    <>
      <Image source={BOOKING_IMAGES.success} />
      <Text
        className="text-center text-[#690895] text-2xl mt-6"
        style={{ fontFamily: "InterSemiBold" }}
      >
        Berhasil!
      </Text>
      <Text
        className="w-4/5 mt-3 text-center"
        style={{ fontFamily: "InterSemiBold", fontSize: 13 }}
      >
        Silahkan menuju Dashboard untuk mengelola acaramu.
      </Text>
      <View
        className="bg-[#EFB526] rounded-full mt-5 overflow-hidden"
        style={{ elevation: 2 }}
      >
        <Pressable
          android_ripple={{ color: "#CD9304" }}
          className="px-6 py-3"
          onPress={() => handleSubmit()}
        >
          <Text
            className="text-center text-white text"
            style={{ fontFamily: "InterBold" }}
          >
            Back to Home Page
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default ModalConfirmationContent;
