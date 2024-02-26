import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { useAtom } from "jotai";
import { WeatherList } from "../config/url";
import { WeatherType } from "../config/weatherType";
import { useNavigation } from "@react-navigation/native";

export default function List() {
  const {navigate}:any = useNavigation()
  const [list]: [
    WeatherType[],
    React.Dispatch<React.SetStateAction<WeatherType[]>>
  ] = useAtom(WeatherList);
  return (
    <View>
      {list.map((item: WeatherType,key:number) => {
        return (
          
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#03a9f4",
              marginBottom: 15,
              padding:5
            }}
            onPress={()=>navigate("AboutWeather",{item})}
          >
            <Text key={key} style={{ fontSize: 22,textAlign:"center" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
