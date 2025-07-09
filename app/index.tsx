import { Colors } from "@/Src/Constants/Colors";
import general from "@/Src/Constants/General";
import Images from "@/Src/Constants/Images";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const index = () => {
  return (
   
      <View style={general.conver}>
        <Text style={[general.text, { color: Colors.white }]}>
          Fast <Text style={[general.text, { color: Colors.green }]}>Food</Text>
        </Text>
        <Image source={Images.burger} style={general.burger} />
      </View>
  );
};

export default index;
