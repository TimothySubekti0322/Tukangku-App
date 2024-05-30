import React from "react";
import { Text, Pressable, View } from "react-native";
import Modal from "react-native-modal";
import { ActivityIndicator } from "react-native-paper";

interface BottomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  onCancelBooking: () => void;
  loading: boolean;
}

const BottomDrawer: React.FC<BottomDrawerProps> = ({
  isVisible,
  onClose,
  onCancelBooking,
  loading,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={{ justifyContent: "flex-end", margin: 0 }}
    >
      <View
        className="px-6 py-4 bg-white"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <View className="self-center w-1/5 border-2 border-[#C2C2C2] mb-6"></View>
        <Text className="mb-6 text-xl font-bold text-center text-[#FF0000] w-full border-b-[1px] border-[#C2C2C2] pb-6">
          Cancel Booking
        </Text>
        <Text className="mb-4 text-center text-gray-700 font-InterBold">
          Are you sure you want to cancel your service booking?
        </Text>
        <Text className="mb-12 text-base text-center text-[#7D7D7D]">
          Our service workers will definitely appreciate it more if you didn't
          cancel!
        </Text>
        <View className="flex-row justify-between">
          <Pressable
            className="flex-1 p-3 mr-2 bg-[#FFF8E6] rounded-full"
            onPress={onClose}
          >
            <Text className="text-center text-[#EFB526] font-InterSemiBold">
              Cancel
            </Text>
          </Pressable>
          <Pressable
            className="flex-1 p-3 ml-2 bg-yellow-500 rounded-full"
            onPress={onCancelBooking}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-center text-white font-InterSemiBold">
                Yes, Cancel Booking
              </Text>
            )}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default BottomDrawer;
