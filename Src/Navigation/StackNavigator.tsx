import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import SignUp from "../Screens/AuthScreens/SignUp";
import BottomTab from "../Screens/BottomScreens/BottomTab";
import Homescreen from "../Screens/BottomScreens/Homescreen";
import FoodDetails from "../Screens/FoodDetails";
import Index from "../../app/index";

const stack = createNativeStackNavigator();
const StackNavigator = () => {
    return(
  <NavigationIndependentTree>
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Index"
        screenOptions={{ headerShown: false }} >
        <stack.Screen name="Homescreen" component={Homescreen} />
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="FoodDetails" component={FoodDetails} />
        <stack.Screen name="LoginScreen" component={LoginScreen} />
        <stack.Screen name="BottomTab" component={BottomTab} />
        <stack.Screen name="Index" component={Index} />
      </stack.Navigator>
    </NavigationContainer>
        </NavigationIndependentTree>
    )
};
export default StackNavigator;
