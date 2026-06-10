import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({
  onPress,
  onChangeText,
  placeholder,
  value,
}: {
  onPress?: () => void;
  onChangeText?: (text:string) => void;
  placeholder: string;
  value?: string;
}) => {
  return (
    <View className="flex-row items-center bg-searchBar rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
