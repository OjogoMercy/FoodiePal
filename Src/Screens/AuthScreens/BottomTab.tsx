import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "../BottomScreens/Homescreen";
import CartScreen from "../BottomScreens/CartScreen";
import Profile from "../BottomScreens/Profile";
import SearchScreen from "../BottomScreens/SearchScreen";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    <Tab.Navigator>
        <Tab.Screen name="Homescreen" component={Homescreen} />
        <Tab.Screen name="SearchScreen" component={SearchScreen} />
        <Tab.Screen name="CartScreen" component={CartScreen} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
}
export default BottomTab