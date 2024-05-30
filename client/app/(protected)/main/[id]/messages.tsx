import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HISTORY_IMAGES from "../../../../static/images/history";
import HOME_IMAGES from "../../../../static/images/home";
import RoomChatComponent from "../../../../components/roomChat/roomChatComponent";
import { ActivityIndicator } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import BASE_URL from "../../../../static/API";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";
import NODATA_IMAGES from "../../../../static/images/noData";

interface Rooms {
  id: string;
  worker: string;
  lastMessage: string;
}

const Messages = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState<Rooms[]>([]);
  const [showedRooms, setShowedRooms] = useState<Rooms[]>([]);

  const [filter, setFilter] = useState("");

  // Handle Filter
  const handleFilter = (text: string) => {
    setFilter(text);
    if (text === "") {
      setShowedRooms(rooms);
      return;
    }
    const filteredRooms = rooms.filter((room) =>
      room.worker.toLowerCase().includes(text.toLowerCase())
    );
    setShowedRooms(filteredRooms);
  };

  // Fetch Rooms
  useEffect(() => {
    const fetchRooms = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("tokenTukangKu");
        const response = await axios.get(`${BASE_URL}/roomChat`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status == 200) {
          setRooms(response.data.data);
          setShowedRooms(response.data.data);
        }
      } catch (error: any) {
        Dialog.show({
          type: ALERT_TYPE.WARNING,
          title: "Error",
          textBody: error,
          button: "ok",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);
  return (
    <AlertNotificationRoot>
      <SafeAreaView className="flex-1 bg-[#FBFBFB] px-8">
        <View className="flex-row items-center pt-8 mb-4">
          <Image source={HISTORY_IMAGES.icon} className="w-8 h-8" />
          <Text className="ml-3 text-xl font-bold">Messages</Text>
        </View>
        {/* Searching Section */}
        <View className="bg-[#F0F0F0] mt-2 rounded-xl justify-center py-3">
          <TextInput
            className="px-14"
            placeholder="Search"
            value={filter}
            onChangeText={(text) => handleFilter(text)}
          />
          <Image
            source={HOME_IMAGES.search}
            className="absolute w-6 h-6 left-4"
          />
          <Pressable
            className="absolute right-4"
            onPress={() => console.log("Filter Pressed")}
          >
            <Image source={HOME_IMAGES.filter} className="w-6 h-6" />
          </Pressable>
        </View>

        {/* Chat Component */}
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: loading ? 1 : 0 }}
        >
          {loading && (
            <View className="items-center justify-center flex-1">
              <ActivityIndicator
                animating={true}
                size="large"
                color="#EFB256"
              />
            </View>
          )}
          {!loading && showedRooms.length > 0 && (
            <>
              {showedRooms.map((rooms) => (
                <RoomChatComponent
                  key={rooms.id}
                  id={rooms.id}
                  name={rooms.worker}
                  lastMessage={rooms.lastMessage}
                />
              ))}
            </>
          )}
          {!loading && showedRooms.length === 0 && (
            <View className="items-center justify-center flex-1 px-10 bg-[#FBFBFB] mt-12">
              <Image
                source={NODATA_IMAGES.noData}
                className="w-full h-80"
                style={{ resizeMode: "contain" }}
              />
              <Text className="mt-3 text-2xl text-black font-InterBold">
                No Data Yet :(
              </Text>
              <Text className="text-[#828282] text-[15px] text-center mt-3 font-InterSemiBold">
                You don’t have any message
              </Text>
              <Text className="text-[#828282] text-[15px] text-center font-InterSemiBold">
                add your first one now!
              </Text>
            </View>
          )}

          <View className="h-6"></View>
        </ScrollView>
      </SafeAreaView>
    </AlertNotificationRoot>
  );
};

export default Messages;
