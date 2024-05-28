import { View, Text, ScrollView } from "react-native";
import React from "react";
import HeaderBackTitle from "../../../components/headerBackTitle/headerBackTitle";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../../components/repairing/card";
import REPAIRING_IMAGES from "../../../static/images/repairing";

const Repair = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-[#F0F0F0]">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 26 }}
        >
          <View className="w-full mt-8">
            <HeaderBackTitle title="Repairing" />
          </View>

          {/* Card */}
          <View className="w-full mt-6">
            <Card
              image={REPAIRING_IMAGES.service1}
              name="Cameron William"
              title="Appliances Services"
              price={400000}
              rating={4.8}
              reviews={8992}
            />
            <Card
              image={REPAIRING_IMAGES.service2}
              name="Raymond Chenall"
              title="Appliances Services"
              price={470000}
              rating={4.6}
              reviews={6182}
            />
            <Card
              image={REPAIRING_IMAGES.service3}
              name="Daryl Nehls"
              title="Walls Repairing"
              price={310000}
              rating={4.9}
              reviews={7938}
            />
            <Card
              image={REPAIRING_IMAGES.service4}
              name="Theresa Webb"
              title="Kitchen Appliances"
              price={280000}
              rating={4.8}
              reviews={8132}
            />
            <Card
              image={REPAIRING_IMAGES.service5}
              name="Elmer Evans"
              title="Machine Repairing"
              price={350000}
              rating={4.9}
              reviews={7204}
            />
            <Card
              image={REPAIRING_IMAGES.service6}
              name="Axel Mitchell"
              title="Appliances Services"
              price={430000}
              rating={4.8}
              reviews={8132}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Repair;
