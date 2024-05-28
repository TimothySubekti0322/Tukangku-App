import { View, Animated, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import type { Slide } from "../../static/onboardingSlide/slide";

interface PaginatorProps {
  data: Slide[];
  scrollX: any;
  currentIndex: number;
}

const Paginator: React.FC<PaginatorProps> = ({
  data,
  scrollX,
  currentIndex,
}) => {
  const { width } = useWindowDimensions();
  return (
    <View className="flex-row">
      {data.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
            className={`${index == 3 && "hidden"} ${
              index == currentIndex ? "bg-[#EFB526]" : "bg-[#C4C4C4]"
            }  rounded-full mx-1`}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
  },
});
