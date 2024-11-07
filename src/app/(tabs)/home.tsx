import { router } from "expo-router";
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useGlobalContext } from 'context/GlobalProvider'
import { signOut } from 'lib/appwrite'
import { icons } from "../../../constants";

const Home = () => {
  const { user,  setUser, setIsLogged } = useGlobalContext();
  console.log(user);
  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLogged(false);

    router.replace("/signIn");
  };

  return (
    <SafeAreaView className="bg-primary">
    <View className='flex-1 justify-center items-center  bg-slate-50 dark:bg-black-100 '>
      <Text className=' text-black-100  dark:text-yellow-300'>Welcome Back {user.userName}</Text>
      <TouchableOpacity
              onPress={logout}
              className="flex w-full items-end mb-10"
            >
              <Image
                source={icons.logout}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default Home