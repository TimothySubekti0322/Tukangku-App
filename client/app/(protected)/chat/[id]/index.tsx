import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useLocalSearchParams, router, Stack } from "expo-router";
import BOOKING_IMAGES from "../../../../static/images/booking";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Icon } from "react-native-paper";
import RightChatComponent from "../../../../components/chat/rightChatComponent";
import LeftChatComponent from "../../../../components/chat/leftChatComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../../../../static/API";
import axios from "axios";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";

interface Message {
  sender: string;
  message: string;
}

const Chat = () => {
  const { id } = useLocalSearchParams();

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);

  const [worker, setWorker] = useState<string>("");

  const [user, setUser] = useState<string | null>();

  const [newMessage, setNewMessage] = useState<string>("");

  const scrollViewRef = useRef<ScrollView>(null);

  // Fetch Message
  useEffect(() => {
    const fetchMessage = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem("tokenTukangKu");
        const email = await AsyncStorage.getItem("emailTukangKu");
        setUser(email);
        const response = await axios.get(`${BASE_URL}/roomChat/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.message === "success") {
          setWorker(response.data.data.worker);
          setMessages(response.data.data.chats);
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

    fetchMessage();
  }, []);

  // Send Message
  const sendMessage = async () => {
    const formData: Message = {
      sender: user ?? "",
      message: newMessage,
    };
    try {
      setNewMessage("");
      setMessages((prev) => [...prev, formData]);
      const token = await AsyncStorage.getItem("tokenTukangKu");
      await axios.post(`${BASE_URL}/chat/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error: any) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error,
        button: "ok",
      });
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, [messages]);
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <AlertNotificationRoot>
        {loading ? (
          <View className="items-center justify-center flex-1">
            <ActivityIndicator size="large" color="#EFB526" />
          </View>
        ) : (
          <SafeAreaView className="flex-1 bg-[#FBFBFB]">
            <View className="flex-row items-center w-full px-4 mt-8">
              <Pressable onPress={() => router.push("/main/message")}>
                <Image source={BOOKING_IMAGES.leftArrow} className="w-8 h-8" />
              </Pressable>
              <Text className="ml-4 text-2xl font-bold">{worker}</Text>
            </View>
            <ScrollView
              className="flex-1 mt-4"
              contentContainerStyle={{ paddingHorizontal: 24 }}
              ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
            >
              {/* Chat Component */}
              {messages.map((item, index) => {
                if (item.sender === user) {
                  return (
                    <RightChatComponent key={index} message={item.message} />
                  );
                } else {
                  return (
                    <LeftChatComponent key={index} message={item.message} />
                  );
                }
              })}
            </ScrollView>
          </SafeAreaView>
        )}

        {/* Message Input Box */}
        <View className="fixed bottom-0 items-center justify-center px-4 pt-4 pb-4 bg-white">
          <TextInput
            className="bg-[#F5F5F5] rounded-lg w-full py-2 pl-2 pr-12"
            placeholder="Type your message"
            multiline
            value={newMessage}
            onChangeText={(text) => setNewMessage(text)}
          />
          <Pressable className="absolute right-8" onPress={() => sendMessage()}>
            <Icon source="send" size={24} color="#EFB526" />
          </Pressable>
        </View>
      </AlertNotificationRoot>
    </>
  );
};

export default Chat;
