import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-200 dark:bg-blue-950">
      <Text className="dark:color-slate-400 font-pblack" >index </Text>
      <StatusBar />
      <Link className="color-primary dark:color-yellow-400" href='/home'>Home</Link>
    </View>)
  
}


