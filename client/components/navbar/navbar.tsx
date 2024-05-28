import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import NAVBAR_IMAGES from "../../static/images/navbar";

interface NavbarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeScreen, setActiveScreen }) => {
  return (
    <View className="fixed bottom-0 bg-white h-20 items-center flex-row px-8 w-full justify-between">
      <Pressable
        className="justify-center items-center"
        onPress={() => setActiveScreen("home")}
      >
        <Image
          source={
            activeScreen == "home"
              ? NAVBAR_IMAGES.homeActive
              : NAVBAR_IMAGES.home
          }
          className="w-8 h-8"
        />
        <Text
          className={`${
            activeScreen == "home" ? "text-[#EFB526]" : "text-[#7F7F7F]"
          } font-InterSemiBold`}
        >
          Home
        </Text>
      </Pressable>
      <Pressable
        className="justify-center items-center"
        onPress={() => setActiveScreen("booking")}
      >
        <Image
          source={
            activeScreen == "booking"
              ? NAVBAR_IMAGES.bookingsActive
              : NAVBAR_IMAGES.bookings
          }
          className="w-8 h-8"
        />
        <Text
          className={`${
            activeScreen == "booking" ? "text-[#EFB526]" : "text-[#7F7F7F]"
          } font-InterSemiBold`}
        >
          Bookings
        </Text>
      </Pressable>
      <Pressable
        className="justify-center items-center"
        onPress={() => setActiveScreen("message")}
      >
        <Image
          source={
            activeScreen == "message"
              ? NAVBAR_IMAGES.messagesActive
              : NAVBAR_IMAGES.messages
          }
          className="w-8 h-8"
        />
        <Text
          className={`${
            activeScreen == "message" ? "text-[#EFB526]" : "text-[#7F7F7F]"
          } font-InterSemiBold`}
        >
          Messages
        </Text>
      </Pressable>
      <Pressable
        className="justify-center items-center"
        onPress={() => setActiveScreen("profile")}
      >
        <Image
          source={
            activeScreen == "profile"
              ? NAVBAR_IMAGES.profileActive
              : NAVBAR_IMAGES.profile
          }
          className="w-8 h-8"
        />
        <Text
          className={`${
            activeScreen == "profile" ? "text-[#EFB526]" : "text-[#7F7F7F]"
          } font-InterSemiBold`}
        >
          Profile
        </Text>
      </Pressable>
    </View>
  );
};

export default Navbar;
