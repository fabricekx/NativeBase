import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function TestButton() {
  return (
    <View>
      <TouchableOpacity onPress={() => console.log("Button pressed!")}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}
