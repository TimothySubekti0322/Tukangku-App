import React from "react";
import OrderServiceContextProvider from "../../../store/context/orderServiceContext";
import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </>
  );
};

export default BookingLayout;
