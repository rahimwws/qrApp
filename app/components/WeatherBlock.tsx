import { View, Text } from "react-native";
import React from "react";
import { WeatherType } from "../config/weatherType";
import WeatherAdd from "./WeatherAdd";

type Props = {
  weatherData: WeatherType;
  showButton: boolean;
};
const WeatherBlock = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          fontSize: 18,
          color: "#000",
          fontWeight: "500",
          marginBottom: 5,
        }}
      >
        Место: {props.weatherData.name}
      </Text>
      <Text style={{ fontSize: 32, color: "#03a9f4", fontWeight: "500" }}>
        Температура: {Math.round(props.weatherData.main["temp"])}°C
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: "#000",
          fontWeight: "500",
          marginBottom: 20,
        }}
      >
        Ощущаеться: {Math.round(props.weatherData.main["feels_like"])}°C
      </Text>
      {props.showButton && <WeatherAdd />}
    </View>
  );
};

export default WeatherBlock;
