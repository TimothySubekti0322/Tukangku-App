import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Navbar from "../../../../components/navbar/navbar";
import Home from "./home";
import Bookings from "./bookings";
import Messages from "./messages";
import Profile from "./profile";

const Main = () => {
  const { id = "home" } = useLocalSearchParams<{ id: string }>();
  const [activeScreen, setActiveScreen] = useState<string>(id);

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
