import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import React from "react";

type CustomButtonProps = {
  title: string;
  handlePress: () => void; // typage fonction sans retour;
  containerStyles?: string; // Ajout de `?` si c'est optionnel
  textStyle?: string;
  isLoading?: boolean;
};
const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      } `}
      disabled={isLoading} // désactive le bouton si isLoaing= true
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
