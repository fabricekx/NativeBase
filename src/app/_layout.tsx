import "../global.css";
import { Stack, SplashScreen } from "expo-router";
import {useFonts} from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync // empêche l'auto hide du splashScreen

const _layout = () => {

  const [fontsLoaded, error]= useFonts({"Poppins-Black": require("../../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => { // ici pas de parametres (ni setup, ni dependencies), on se contente d'appeler le hook
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Splachscreen est un composant de expoRouter,
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <Stack screenOptions={{headerShown : false}} ></Stack>
  )
}

export default _layout
