import { Text, View,TouchableOpacity,Image } from "react-native";
import { StatusBar } from "react-native";
import Images from "../Src/Constants/Images";
import { Colors } from '../Src/Constants/Colors';
import { Animated } from "react-native";
import { useEffect } from "react";
import * as Animatable from 'react-native-animatable';
// import {MotiImage} from 'moti'
export default function Index() {
  const fadeAnim = new Animated.Value(0); // Initial value for opacity: 0
  useEffect(() => {
 Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }[])
  return (
   <View style={{flex:1,backgroundColor:Colors.main}}>
    <StatusBar backgroundColor={Colors.main}/>
    <View style={{flexDirection:'row',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold'}}>DeliverEats</Text>
      <Image source={Images.pizza} style={{height:20,width:20,marginLeft:3}}/>
    </View>
      <Animated.Image
        source={Images.deliver}
        style={{
          width: 300,
          height: 300,
          alignSelf: 'center',
          opacity: fadeAnim, 
          marginTop: 50,
        }}
      />
    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:95,marginTop:55}}>Craving Delicious Food?</Text>
    <Text style={{fontSize:16,fontWeight:'bold',marginLeft:65}}>We'll Bring It To You In No Time!</Text>
    <TouchableOpacity style={{backgroundColor:'white',borderRadius:10,height:50,width:'85%',elevation:5,marginTop:100,alignSelf:'center',justifyContent:'center'}}>
      <Text style={{fontSize:16,fontWeight:'bold',marginLeft:120}}>Sign Up</Text>
    </TouchableOpacity>
    <View style={{flexDirection:'row',marginTop:100,justifyContent:'center'}}>
    <Text>Already Have an Account?</Text>
    <Text style={{fontWeight:'bold'}}>Log In</Text>
    </View>
   </View>
  );
}
