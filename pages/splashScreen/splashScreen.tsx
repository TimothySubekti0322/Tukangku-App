import React, { useEffect } from "react";
import { Image } from "react-native";
import image from "../../assets/splash-screen.png";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackNavigatorParamsList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SplashScreenProps = NativeStackScreenProps<
  RootStackNavigatorParamsList,
  "SplashScreen"
>;

const SplashScreen = ({ route, navigation }: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("GettingStarted1");
    }, 3000);
  }, []);
  return <Image source={image} className="w-full h-full" />;
};

export default SplashScreen;
