import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import NAVBAR_IMAGES from "../../../static/images/navbar";
import Navbar from "../../../components/navbar/navbar";
import Home from "./home";
import Bookings from "./bookings";
import Messages from "./messages";
import Profile from "./profile";

const Main = () => {
  const { screen = "home" } = useLocalSearchParams();
  const [activeScreen, setActiveScreen] = useState(screen as string);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      {activeScreen === "home" && <Home />}
      {activeScreen === "booking" && <Bookings />}
      {activeScreen === "message" && <Messages />}
      {activeScreen === "profile" && <Profile />}
      <Navbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </>
  );
};

export default Main;
