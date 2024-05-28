import { Stack } from "expo-router";
import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while fetch resources
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [appIsReady, setAppIsReady] = useState<boolean>(false);
  let [fontsLoaded, fontError] = useFonts({
    "InterBlack" : require("../assets/fonts/Inter-Black.ttf"),
    "InterBold" : require("../assets/fonts/Inter-Bold.ttf"),
    "InterExtraBold" : require("../assets/fonts/Inter-ExtraBold.ttf"),
    "InterExtraLight" : require("../assets/fonts/Inter-ExtraLight.ttf"),
    "InterLight" : require("../assets/fonts/Inter-Light.ttf"),
    "InterMedium" : require("../assets/fonts/Inter-Medium.ttf"),
    "InterRegular" : require("../assets/fonts/Inter-Regular.ttf"),
    "InterSemiBold" : require("../assets/fonts/Inter-SemiBold.ttf"),
    "InterThin" : require("../assets/fonts/Inter-Thin.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      // After fonts are loaded, wait for 1 seconds before setting the app as ready
      setTimeout(() => {
        setAppIsReady(true);
      }, 1000);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    if (appIsReady) {
      // When the app is ready, hide the splash screen
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <Stack />;
};

export default RootLayout;
