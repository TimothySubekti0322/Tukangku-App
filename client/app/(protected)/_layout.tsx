import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import OrderServiceContextProvider from "../../store/context/orderServiceContext";

const ProtectedLayout = () => {
  return (
    <OrderServiceContextProvider>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack />
    </OrderServiceContextProvider>
  );
};

export default ProtectedLayout;
