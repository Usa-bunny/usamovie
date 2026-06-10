import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({ item }: { item: Movie }) => {
  return (
    <Link href={`/movies/${item.id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image 
          source={{
            uri: item.poster_path
              ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
              : "https://placehold.co/400x600/1a1a1a/ffffff.png?text=No+Image",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />

        <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{item.title}</Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">{item.vote_average.toFixed(2)}</Text>
        </View>
        
        <View className="flex-row items-center justify-between mt-1">
            <Text className="text-xs text-text font-medium">{item.release_date.slice(0, 4)}</Text>
            <Text className="text-xs text-text font-medium">Movie</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
