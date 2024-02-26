import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { WeatherType } from "../config/weatherType";
import { useNavigation, useRoute } from "@react-navigation/native";
import WeatherBlock from "../components/WeatherBlock";

const AboutWeather = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { params }: any = route;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.item["name"],
    });
  }, []);
  return <WeatherBlock weatherData={params.item} showButton={false} />;
};

export default AboutWeather;
