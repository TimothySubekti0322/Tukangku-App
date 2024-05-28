import React, { useState, useEffect } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import Navbar from "../../../components/navbar/navbar";
import Home from "./home";
import Bookings from "./bookings";
import Messages from "./messages";
import Profile from "./profile";

const Main = () => {
  const { screen = "home" } = useLocalSearchParams();
  const [activeScreen, setActiveScreen] = useState<string>(screen as string);
  useEffect(() => {
    setActiveScreen(screen as string);
  }, [screen]);

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
