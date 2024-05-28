import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { Icon } from "react-native-paper";
import * as dateFn from "../../../utils/datePicker";

const day = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

interface DatePickerProps {
  handleChange: (field: string, value: Date) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ handleChange }) => {
  const currentMonth = new Date().getMonth();
  const [date, setDate] = useState<Date>(new Date());
  const [arrayDate, setArrayDate] = useState<(string | number)[][]>(
    dateFn.getArrayOfDate(new Date())
  );
  const [month, setMonth] = useState<string>(dateFn.getMonthName(new Date()));
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<number>(0);

  const handleChooseDate = (dateNumber: number | string) => {
    if (typeof dateNumber !== "number") return;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const chooseDate = new Date(year, dateFn.getMonthNumber(month), dateNumber);
    if (chooseDate < today) {
      return;
    }
    handleChange(
      "date",
      new Date(year, dateFn.getMonthNumber(month), dateNumber)
    );
    setSelectedDate(dateNumber);
    setSelectedMonth(month);
    setSelectedYear(year);
  };

  const handleNextMonth = () => {
    const prevDate = new Date(date);
    if (month === "December") {
      prevDate.setMonth(0);
      prevDate.setFullYear(year + 1);
    } else {
      prevDate.setMonth(date.getMonth() + 1);
    }
    setArrayDate(dateFn.getArrayOfDate(prevDate));
    setMonth(dateFn.getMonthName(prevDate));
    setYear(prevDate.getFullYear());
    setDate(prevDate);
  };

  const handlePrevMonth = () => {
    const prevDate = new Date(date);

    if (prevDate.getMonth() === currentMonth) {
      return;
    }

    if (month === "January") {
      prevDate.setMonth(11);
      prevDate.setFullYear(year - 1);
    } else {
      prevDate.setMonth(prevDate.getMonth() - 1);
    }

    setArrayDate(dateFn.getArrayOfDate(prevDate));
    setMonth(dateFn.getMonthName(prevDate));
    setYear(prevDate.getFullYear());
    setDate(prevDate);
  };

  return (
    <>
      {/* DatePicker */}
      <View className="w-full bg-[#FFF8E6] rounded-2xl py-4 px-3 mt-6">
        <View className="flex-row items-center justify-between">
          <Text className="font-bold" style={{ fontSize: 16 }}>
            {month} {year}
          </Text>
          <View className="flex-row items-center justify-center">
            <Pressable onPress={handlePrevMonth}>
              <Icon
                source="chevron-left"
                size={20}
                color={
                  currentMonth === dateFn.getMonthNumber(month)
                    ? "#a1a1a1"
                    : "black"
                }
              />
            </Pressable>
            <Pressable className="ml-6" onPress={handleNextMonth}>
              <Icon source="chevron-right" size={20} />
            </Pressable>
          </View>
        </View>

        {/* Date List */}
        <View className="flex-row items-center justify-between w-full mt-4 -mx-3">
          {day.map((item, index) => (
            <Text key={index} className="w-[15.3%] text-center font-semibold">
              {item}
            </Text>
          ))}
        </View>

        {arrayDate.map((array, rowIndex) => (
          <View
            key={rowIndex}
            className="flex-row items-center justify-between w-full mt-4 -mx-3"
          >
            {array.map((item, index) => (
              <Pressable
                key={index}
                className="w-[15.3%] items-center"
                onPress={() => handleChooseDate(item)}
              >
                <View
                  className={`${
                    selectedYear === year &&
                    selectedMonth === month &&
                    selectedDate === item &&
                    "bg-[#EFB526] rounded-full w-8 h-8 items-center justify-center"
                  }`}
                >
                  <Text
                    className={`${
                      selectedYear === year &&
                      selectedMonth === month &&
                      selectedDate === item
                        ? "text-white"
                        : "text-black p-2"
                    } text-center`}
                  >
                    {item}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </>
  );
};

export default DatePicker;
