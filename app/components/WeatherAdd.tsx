import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useAtom } from "jotai";
import { WeatherList, weatherDataAtom } from "../config/url";
import { useNavigation } from "@react-navigation/native";

const WeatherAdd = () => {
  const navigation: any = useNavigation();
  const [weather] = useAtom(weatherDataAtom);
  const [list, setList]: any = useAtom(WeatherList);
  const [added, setAdded] = useState(false);
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        height: 56,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#03a9f4",
      }}
      onPress={() => {
        if (list.includes(weather)) {
          navigation.navigate("WeatherStack");
        } else {
          setAdded(true);
          setList([...list, weather]);
        }
      }}
    >
      <Text style={{ color: "#fff", fontWeight: "600" }}>
        {added ? "Добавлено" : "Добавить в список"}
      </Text>
    </TouchableOpacity>
  );
};

export default WeatherAdd;
