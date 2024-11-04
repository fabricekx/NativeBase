import { Link, router, Redirect } from "expo-router";
import React from "react";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import {images} from "../../constants";
import CustomButton from "componants/customButton";



export default function App() {
  return (
    <SafeAreaView className=" bg-slate-50 dark:bg-black-200 h-full">
<ScrollView contentContainerStyle={{ height: '100%'}}>
<View className= " w-full justify-center items-center h-full px-4">
<Image className="w-[130px] h-[84px]"
resizeMode="contain" // permet à l'image de s'adapter à la taille de son container
source={images.logo}
/>
<Image
source={images.cards}
className="max-w-[380px] w-full h-[300px]"
resizeMode="contain" 
/>
<View className="relative mt-5">
<Text className="text-3xl text-black-100 dark:text-yellow-200">
  Venez découvrir la puissance de {' '} 
  <Text className="text-secondary-200">Aora</Text>
  </Text>
  <Image className="w-[136px] h-[15px] " resizeMode="contain" source={images.path}/> 

</View>
<Text className="text-lg mt-4 text-black-100 dark:text-yellow-200">Quand la créativité se joint à l'innovation</Text>

<CustomButton
     title="Continue with Email"
     handlePress={() => router.push("../sign-in")}
     containerStyles="w-full mt-7 "/>
</View>
</ScrollView>

<StatusBar backgroundColor="#161622"  />
    </SafeAreaView>
  )
}


