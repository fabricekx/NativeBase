import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import { Stack, Tabs, Redirect } from 'expo-router'
import {icons} from "../../../constants";


const TabIcon= ({icon, color, name, focused}) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image className='w-6 h-6'
      source={icon}
      // resizeMode='containe'
      tintColor={color}/> 
      <Text className={`{$focused? "font-psemibold : "font-pregular} text-xs dark:color-white ` }>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  // console.log(colorScheme);

  return (
    <Tabs 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveBackgroundColor: colorScheme==="dark" ? "#2b2828" : "#3e7bab",
      tabBarInactiveBackgroundColor: colorScheme==="dark" ? "#000" : "#ffffff",
      tabBarInactiveTintColor : colorScheme==="dark" ? "#910901" : "#3e7bab",
      tabBarActiveTintColor: colorScheme==="dark" ? "#d1b906" : "#c96522",
      tabBarStyle: {
        borderTopColor: '#3e7bab',
        borderTopWidth: 1,
        height: 84
      }
    }}>
      <Tabs.Screen 
      name="home"
      options = {{
title: "Home",
headerShown: false,
tabBarIcon: ({color,focused}) => (
  <TabIcon 
  icon = {icons.home}
  color = {color}
  name = "Home"
  focused = {focused} 
     
  />
)

      }}/>
       <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
    </Tabs>
  )
}

export default TabsLayout