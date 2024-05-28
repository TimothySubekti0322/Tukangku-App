import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import HISTORY_IMAGES from "../../../static/images/history";
import UpcomingCard from "../../../components/history/upcomingCard";
import CompletedCard from "../../../components/history/completedCard";
import CancelledCard from "../../../components/history/cancelledCard";
import { ActivityIndicator } from "react-native-paper";
import BottomDrawer from "../../../components/history/bottomDrawer";

// Define the types for the route props
interface RouteProps {
  data: string[];
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
    contentContainerStyle={{ paddingHorizontal: 24 }}
  >
    {data.map((item, index) => (
      <UpcomingCard
        key={item}
        cardId={index.toString()}
        service="Appliances Services"
        worker="Cameron William"
        date="Thursday, 4 April 2024"
        location="Jl. Dago Asri 1 Blok A No. 100, Bandung"
        time="09:00 - 11:00 AM"
        onOpenDrawer={onOpenDrawer}
      />
    ))}
  </ScrollView>
);

const CompletedRoute: React.FC<RouteProps> = ({ data }) => (
  <ScrollView
    className="flex-1 w-full"
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingHorizontal: 24 }}
  >
    {data.map((item, index) => (
      <CompletedCard
        key={item}
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
    contentContainerStyle={{ paddingHorizontal: 24 }}
  >
    {data.map((item, index) => (
      <CancelledCard
        key={item}
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

  const [upcomingData, setUpcomingData] = useState<string[]>([]);
  const [completedData, setCompletedData] = useState<string[]>([]);
  const [cancelledData, setCancelledData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const upcoming = await fetchUpcomingData();
        const completed = await fetchCompletedData();
        const cancelled = await fetchCancelledData();

        setUpcomingData(upcoming);
        setCompletedData(completed);
        setCancelledData(cancelled);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchUpcomingData = async (): Promise<string[]> => {
    // Replace with actual data fetching logic
    return ["Upcoming 1", "Upcoming 2", "Upcoming 3"];
  };

  const fetchCompletedData = async (): Promise<string[]> => {
    // Replace with actual data fetching logic
    return ["Completed 1", "Completed 2", "Completed 3"];
  };

  const fetchCancelledData = async (): Promise<string[]> => {
    // Replace with actual data fetching logic
    return ["Cancelled 1", "Cancelled 2", "Cancelled 3"];
  };

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
    console.log(id);
    setDrawerVisible(true);
  };

  const handleCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleCancelBooking = () => {
    console.log("Booking canceled");
    setDrawerVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#FBFBFB]">
      <View className="flex-row items-center px-6 pt-8 mb-4">
        <Image source={HISTORY_IMAGES.icon} className="w-8 h-8" />
        <Text className="ml-3 text-xl font-bold">My Bookings</Text>
      </View>
      {loading ? (
        <View className="items-center justify-center flex-1">
          <ActivityIndicator size="large" color="#0000ff" />
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
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Bookings;
