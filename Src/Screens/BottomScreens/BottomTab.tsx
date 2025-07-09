import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import CartScreen from "./CartScreen";
import Homescreen from "./Homescreen";
import Profile from "./Profile";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  <Tab.Navigator>
    <Tab.Screen
      name="Homescreen"
      component={Homescreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="SearchScreen"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="people" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>;
}
