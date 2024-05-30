import { View, Text, Image, Dimensions, Alert, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PROFILE_IMAGES from "../../../../static/images/profile";
import Menu from "../../../../components/profile/menu";
import Signout from "../../../../components/profile/signout";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-paper";
import { router } from "expo-router";

const Profile = () => {
  const width = Dimensions.get("window").width;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        setLoading(true);
        const name = await AsyncStorage.getItem("nameTukangKu");
        const email = await AsyncStorage.getItem("emailTukangKu");
        setName(name ?? "");
        setEmail(email ?? "");
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);
  return (
    <SafeAreaView className="flex-1 px-8 pt-8 bg-[#FBFBFB]">
      {loading ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="large" color="#EFB526" />
        </View>
      ) : (
        <>
          <View className="items-center justify-center border-b-[1px] border-[#C2C2C2] pb-6 mb-4">
            <View className="items-center justify-center">
              <Image
                source={PROFILE_IMAGES.avatar}
                className="rounded-full"
                style={{
                  width: width * 0.3,
                  height: width * 0.3,
                  resizeMode: "contain",
                }}
              />
              <Pressable
                className="absolute bottom-0 -right-3 p-2 bg-[#EFB526] rounded-xl"
                onPress={() => router.push("/comingSoon/profile")}
              >
                <Image source={PROFILE_IMAGES.edit} className="w-5 h-5" />
              </Pressable>
            </View>
            <Text className="mt-4 text-2xl font-bold">{name}</Text>
            <Text className="mt-1">{email}</Text>
          </View>
          <View>
            <Menu
              image={PROFILE_IMAGES.profile}
              leftText="Edit Profile"
              rightText=""
            />
            <Menu
              image={PROFILE_IMAGES.location}
              leftText="Manage Address"
              rightText=""
            />
            <Menu
              image={PROFILE_IMAGES.language}
              leftText="Language"
              rightText="English (US)"
            />
            <Menu
              image={PROFILE_IMAGES.security}
              leftText="Security"
              rightText=""
            />
            <Menu
              image={PROFILE_IMAGES.setting}
              leftText="Settings"
              rightText=""
            />
            <Menu
              image={PROFILE_IMAGES.help}
              leftText="Help Center"
              rightText=""
            />
            <Menu
              image={PROFILE_IMAGES.lock}
              leftText="Privacy Policy"
              rightText=""
            />
          </View>
          <Signout />
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;
