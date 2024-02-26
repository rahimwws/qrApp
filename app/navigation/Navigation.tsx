import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WeatherStack } from "./WeatherStack";
import Scanner from "../screens/Scanner";
const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:"#03A9F4",
      tabBarInactiveTintColor:"#808080",
      headerTitleAlign:"left"

    }}>
      <Tab.Screen
        name="Home"
        component={Scanner}
        options={{
          tabBarIcon: ({color}) => {
            return <AntDesign name="home" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen name="WeatherStack" component={WeatherStack} options={{
        headerShown:false,
        title:"Weathers",
          tabBarIcon: ({color}) => {
            return <MaterialCommunityIcons name="weather-cloudy" size={24} color={color} />
          },
        }}/>
    </Tab.Navigator>
  );
};
