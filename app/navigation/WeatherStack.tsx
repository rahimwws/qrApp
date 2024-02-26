import { createStackNavigator } from "@react-navigation/stack";
import List from "../screens/List";
import AboutWeather from "../screens/AboutWeather";

const Stack = createStackNavigator();

export function WeatherStack() {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen name="Weathers" component={List} options={{
        headerTitleAlign: "left",

      }} />
      <Stack.Screen name="AboutWeather" component={AboutWeather} options={{
        headerTitleAlign: "center",
      }} />
    </Stack.Navigator>
  );
}
