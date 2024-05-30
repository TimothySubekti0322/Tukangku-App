import { View, Text, ScrollView, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderBackTitle from "../../../components/headerBackTitle/headerBackTitle";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../../components/repairing/card";

import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../../../static/API";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

interface Services {
  id: string;
  service: string;
  price: number;
  review: number;
  rating: number;
  worker: string;
}

const Repair = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("tokenTukangKu");
        const response = await axios.get(`${BASE_URL}/service`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data.data);
      } catch (error: any) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView className="flex-1 bg-[#F0F0F0]">
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 26,
            flex: loading ? 1 : 0,
          }}
        >
          <View className="w-full mt-8">
            <HeaderBackTitle title="Repairing" />
          </View>

          {/* Card */}
          {loading ? (
            <View className="items-center justify-center flex-1">
              <ActivityIndicator
                size="large"
                color="#EFB526"
                animating={true}
              />
            </View>
          ) : (
            <View className="w-full mt-6">
              {data.map((item: Services) => (
                <Card
                  key={item.id}
                  name={item.worker}
                  title={item.service}
                  price={item.price}
                  rating={item.rating}
                  reviews={item.review}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Repair;
