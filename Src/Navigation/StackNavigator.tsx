import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import Homescreen from "../Screens/BottomScreens/Homescreen";
import SignUp from "../Screens/AuthScreens/SignUp";
import FoodDetails from "../Screens/FoodDetails";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";

const stack = createNativeStackNavigator();
const StackNavigator = () => {
    <NavigationIndependentTree>
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Homescreen" component={Homescreen} />
                <stack.Screen name="SignUp" component={SignUp} />
                <stack.Screen name="FoodDetails" component={FoodDetails} />
                <stack.Screen name="LoginScreen" component={LoginScreen} />
            </stack.Navigator>
    </NavigationContainer>
</NavigationIndependentTree>
}
export default StackNavigator