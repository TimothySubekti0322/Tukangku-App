import {
  View,
  FlatList,
  Animated,
  ViewToken,
  Text,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import OnboardingComponent from "../../components/onboarding/onboarding";
import { Stack, router } from "expo-router";
import slide from "../../static/onboardingSlide/slide";
import Paginator from "../../components/onboarding/paginator";
import PaginatorButton from "../../components/onboarding/paginatorButton";
import GetStartedButton from "../../components/onboarding/getStartedButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnBoarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList>(null);
  const viewableItemsChanged = useRef(
    (info: { viewableItems: ViewToken[] }) => {
      if (info.viewableItems.length > 0) {
        setCurrentIndex(info.viewableItems[0].index!);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const onPressHandler = () => {
    if (currentIndex < slide.length - 1 && slideRef.current) {
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const getStartedHandler = async () => {
    await AsyncStorage.setItem("onboarded", "true");
    router.replace("../login");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 w-full bg-white">
        <FlatList
          data={slide}
          renderItem={({ item }) => (
            <OnboardingComponent
              image={item.image}
              title1={item.title1}
              title2={item.title2}
              title3={item.title3}
              description1={item.description1}
              description2={item.description2}
              description3={item.description3}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
        {currentIndex == 3 ? (
          <GetStartedButton onPress={getStartedHandler} />
        ) : (
          <View className="relative flex-row items-center justify-center w-full pb-16">
            <Paginator
              data={slide}
              scrollX={scrollX}
              currentIndex={currentIndex}
            />
            <PaginatorButton onPress={onPressHandler} />
          </View>
        )}
      </View>
    </>
  );
};

export default OnBoarding;
