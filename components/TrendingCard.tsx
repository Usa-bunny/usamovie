import { images } from "@/constants/images";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({
  item,
  index,
}: {
  item: TrendingMovie;
  index: number;
}) => {
  return (
    <Link href={`/movies/${item.movie_id}`} asChild>
      <TouchableOpacity className="w-32 relative ml-5">
        <Image
          source={{ uri: item.poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-9 -left-8 px-3 py-1 rounded-full">
          <MaskedView
            maskElement={
              <Text className="text-white font-bold text-6xl">{index + 1}</Text>
            }
          >
            <Image
              source={images.rankingGradient}
              className="size-14"
              resizeMode="cover"
            />
          </MaskedView>
        </View>
        
        <Text className="text-sm font-bold mt-2 text-accentText" numberOfLines={2}>
            {item.title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
