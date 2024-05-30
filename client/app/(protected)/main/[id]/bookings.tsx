import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ToastAndroid,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HISTORY_IMAGES from "../../../../static/images/history";
import UpcomingCard from "../../../../components/history/upcomingCard";
import CompletedCard from "../../../../components/history/completedCard";
import CancelledCard from "../../../../components/history/cancelledCard";
import { ActivityIndicator } from "react-native-paper";
import BottomDrawer from "../../../../components/history/bottomDrawer";
import axios from "axios";
import BASE_URL from "../../../../static/API";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  calculateTimeRange,
  formatDayDateMonthYear,
} from "../../../../utils/dateFormater";
import NoDataWithoutButton from "../../../../components/noData/noDataWithoutButton";
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
} from "react-native-alert-notification";


export interface History {
  id: string;
  service: string;
  worker: string;
  status: string;
  date: string;
  startTime: string;
  workingHours: number;
  fullAddress: string;
}

// Define the types for the route props
interface RouteProps {
  data: History[];
}

interface UpcomingRouteProps extends RouteProps {
  onOpenDrawer: (id: string) => void;
}

// Define the type for the TabView state
interface State {
  index: number;
  routes: { key: string; title: string }[];
}

const UpcomingRoute: React.FC<UpcomingRouteProps> = ({
  data,
  onOpenDrawer,
}) => (
  <ScrollView
    className="flex-1 w-full"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 24,
      flex: data.length === 0 ? 1 : 0,
    }}
  >
    {data.length === 0 && <NoDataWithoutButton />}
    {data.map((item, index) => (
      <UpcomingCard
        key={item.id}
        cardId={item.id}
        service={item.service}
        worker={item.worker}
        date={formatDayDateMonthYear(new Date(item.date))}
        location={item.fullAddress}
        time={calculateTimeRange(item.startTime, item.workingHours)}
        onOpenDrawer={onOpenDrawer}
      />
    ))}
  </ScrollView>
);

const CompletedRoute: React.FC<RouteProps> = ({ data }) => (
  <ScrollView
    className="flex-1 w-full"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 24,
      flex: data.length === 0 ? 1 : 0,
    }}
  >
    {data.length === 0 && <NoDataWithoutButton />}
    {data.map((item, index) => (
      <CompletedCard
        key={item.id}
        service="Appliances Services"
        worker="Cameron William"
        date="Thursday, 4 April 2024"
        location="Jl. Dago Asri 1 Blok A No. 100, Bandung"
        time="09:00 - 11:00 AM"
      />
    ))}
  </ScrollView>
);

const CancelledRoute: React.FC<RouteProps> = ({ data }) => (
  <ScrollView
    className="flex-1 w-full"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 24,
      flex: data.length === 0 ? 1 : 0,
    }}
  >
    {data.length === 0 && <NoDataWithoutButton />}
    {data.map((item, index) => (
      <CancelledCard
        key={item.id}
        service="Appliances Services"
        worker="Cameron William"
      />
    ))}
  </ScrollView>
);

const Bookings: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const [routes] = useState([
    { key: "upcoming", title: "Upcoming" },
    { key: "completed", title: "Completed" },
    { key: "cancelled", title: "Cancelled" },
  ]);

  const [upcomingData, setUpcomingData] = useState<History[]>([]);
  const [completedData, setCompletedData] = useState<History[]>([]);
  const [cancelledData, setCancelledData] = useState<History[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = await AsyncStorage.getItem("tokenTukangKu");

        const response = await axios.get(`${BASE_URL}/booking/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUpcomingData(response.data.data.upcoming);
        setCompletedData(response.data.data.completed);
        setCancelledData(response.data.data.cancelled);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderScene = SceneMap({
    upcoming: () => (
      <UpcomingRoute data={upcomingData} onOpenDrawer={handleOpenDrawer} />
    ),
    completed: () => <CompletedRoute data={completedData} />,
    cancelled: () => <CancelledRoute data={cancelledData} />,
  });

  // Bottom Drawer
  const [isDrawerVisible, setDrawerVisible] = useState<boolean>(false);

  // Id Cancel Booking
  const [idCanceled, setIdCanceled] = useState<string>("");

  const handleOpenDrawer = (id: string) => {
    setIdCanceled(id);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const [loadingCancel, setLoadingCancel] = useState<boolean>(false);

  const handleCancelBooking = async () => {
    try {
      setLoadingCancel(true);
      const token = await AsyncStorage.getItem("tokenTukangKu");
      const response = await axios.post(
        `${BASE_URL}/booking/cancel/${idCanceled}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.status == 200) {
        ToastAndroid.show("Booking Cancelled", ToastAndroid.SHORT);
        setCancelledData((prev) => [...prev, response.data.data]);
        setUpcomingData((prev) =>
          prev.filter((item) => item.id !== response.data.data.id)
        );
      }
    } catch (error: any) {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: "Error",
        textBody: error,
        button: "ok",
      });
    } finally {
      setLoadingCancel(false);
    }
    setDrawerVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB]">
      <AlertNotificationRoot>
        <View className="flex-row items-center px-6 pt-8 mb-4">
          <Image source={HISTORY_IMAGES.icon} className="w-8 h-8" />
          <Text className="ml-3 text-xl font-bold">My Bookings</Text>
        </View>
        {loading ? (
          <View className="items-center justify-center flex-1">
            <ActivityIndicator size="large" color="#EFB526" />
          </View>
        ) : (
          <View className="flex-1">
            <TabView
              navigationState={{ index, routes }}
              renderScene={renderScene}
              onIndexChange={setIndex}
              initialLayout={{ width: Dimensions.get("window").width }}
              style={{ flex: 1 }}
              renderTabBar={(props) => (
                <TabBar
                  {...props}
                  indicatorStyle={{ backgroundColor: "#EFB526" }}
                  pressColor="#DDDDDD"
                  style={{
                    backgroundColor: "#FBFBFB",
                    marginHorizontal: 24,
                    shadowColor: "transparent",
                  }}
                  renderLabel={({ route, focused, color }) => (
                    <Text
                      style={{
                        color: focused ? "#EFB526" : "#C2C2C2",
                        margin: 8,
                        fontFamily: "InterBold",
                      }}
                    >
                      {route.title}
                    </Text>
                  )}
                />
              )}
            />
            <BottomDrawer
              isVisible={isDrawerVisible}
              onClose={handleCloseDrawer}
              onCancelBooking={handleCancelBooking}
              loading={loadingCancel}
            />
          </View>
        )}
      </AlertNotificationRoot>
    </SafeAreaView>
  );
};

export default Bookings;
