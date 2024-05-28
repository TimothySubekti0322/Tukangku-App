import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { Stack, router } from "expo-router";
import HeaderBackTitle from "../../../../components/headerBackTitle/headerBackTitle";
import ApplianceServicesCard from "../../../../components/booking/applianceServices/applianceServicesCard";
import { OrderServiceContext } from "../../../../store/context/orderServiceContext";
import SubmitButton from "../../../../components/booking/submitButton";
import { formatCurrency } from "../../../../utils/numberFormat";

export type ApplianceServiceKeys =
  | "refrigerator"
  | "dispenser"
  | "sink"
  | "stove"
  | "oven"
  | "washingMachine"
  | "washerDryer"
  | "airConditioner"
  | "television";

interface ApplianceServicesState {
  refrigerator: boolean;
  dispenser: boolean;
  sink: boolean;
  stove: boolean;
  oven: boolean;
  washingMachine: boolean;
  washerDryer: boolean;
  airConditioner: boolean;
  television: boolean;
}

const initialApplianceServices: ApplianceServicesState = {
  refrigerator: false,
  dispenser: false,
  sink: false,
  stove: false,
  oven: false,
  washingMachine: false,
  washerDryer: false,
  airConditioner: false,
  television: false,
};

const ApplianceServices = () => {
  const orderServiceCtx = useContext(OrderServiceContext);

  const [applianceService, setApplianceService] =
    useState<ApplianceServicesState>(initialApplianceServices);
  const [price, setPrice] = useState<number>(0);

  const handleChange = (key: ApplianceServiceKeys) => {
    setApplianceService((prev) => ({ ...prev, [key]: !prev[key] }));
    setPrice((prev) => (applianceService[key] ? prev - 100000 : prev + 100000));
  };

  const handleSubmit = () => {
    const selectedApplianceServices = Object.entries(applianceService)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    orderServiceCtx.setApplianceService(selectedApplianceServices);
    orderServiceCtx.setPrice(price);
    router.push("../bookingDate");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView
        style={{ flex: 1 }}
        className="bg-[#F5F5F5]"
        contentContainerStyle={{ paddingHorizontal: 26 }}
      >
        <View className="w-full mt-16">
          <HeaderBackTitle title="Appliance Services" />
        </View>
        <Text className="mt-4 mb-2">Choose the appliance service you need</Text>
        <ApplianceServicesCard
          title="Refrigerator"
          name="refrigerator"
          checked={applianceService.refrigerator}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Dispenser"
          name="dispenser"
          checked={applianceService.dispenser}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Sink"
          name="sink"
          checked={applianceService.sink}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Stove"
          name="stove"
          checked={applianceService.stove}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Oven"
          name="oven"
          checked={applianceService.oven}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Washing Machine"
          name="washingMachine"
          checked={applianceService.washingMachine}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Washer & Dryer"
          name="washerDryer"
          checked={applianceService.washerDryer}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Air Conditioner"
          name="airConditioner"
          checked={applianceService.airConditioner}
          handleChange={handleChange}
        />
        <ApplianceServicesCard
          title="Television"
          name="television"
          checked={applianceService.television}
          handleChange={handleChange}
        />
        <View className="mt-6 mb-8">
          <SubmitButton
            title={`Continue - ${formatCurrency(price, "Rp", false, true)}`}
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ApplianceServices;
