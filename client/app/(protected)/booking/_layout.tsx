import React from "react";
import OrderServiceContextProvider from "../../../store/context/orderServiceContext";
import { Stack } from "expo-router";

const BookingLayout = () => {
  return (
    <OrderServiceContextProvider>
      <>
        <Stack.Screen options={{ headerShown: false }} />
        <Stack />
      </>
    </OrderServiceContextProvider>
  );
};

export default BookingLayout;
