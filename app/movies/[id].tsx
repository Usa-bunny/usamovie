import { icons } from "@/constants/icons";
import { fetchMovieDetails } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MovieInfo = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null | undefined;
}) => (
  <View className="flex-col items-start justify-center mt-5">
    <Text className="text-accentText font-normal text-sm">{label}</Text>
    <Text className="text-secondaryText font-bold text-sm mt-2">
      {value || "N/A"}
    </Text>
  </View>
);

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const { data: movie, loading: movieLoading } = useFetch(() =>
    fetchMovieDetails(id as string),
  );

  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="stretch"
          />
        </View>

        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white font-bold text-xl">{movie?.title}</Text>
          <View className="flex-row items-center gap-x-1 mt-2">
            <Text className="text-accentText text-sm">
              {movie?.release_date?.slice(0, 4)}
            </Text>
            <Text className="text-  text-sm">{movie?.runtime}m</Text>
          </View>
          <View className="flex-row items-center bg-ratingBox px-2 py-1 rounded-md  gap-x-1 mt-2">
            <Image source={icons.star} />
            <Text className="text-white font-bold text-sm">
              {movie?.vote_average?.toFixed(2)}
            </Text>
            <Text className="text-accentText text-sm">
              ({movie?.vote_count} votes)
            </Text>
          </View>

          <MovieInfo label="Overview" value={movie?.overview} />
          <MovieInfo
            label="Genres"
            value={
              movie?.genres?.map((genre) => genre.name).join(" - ") || "N/A"
            }
          />
          <View className="flex flex-row justify-between w-1/2">
            <MovieInfo
              label="Budget"
              value={
                movie?.budget
                  ? `$${(movie?.budget / 1_000_000).toFixed(2)} million`
                  : "N/A"
              }
            />
            <MovieInfo
              label="Revenue"
              value={
                movie?.revenue
                  ? `$${(movie?.revenue / 1_000_000).toFixed(2)} million`
                  : "N/A"
              }
            />
          </View>
          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies
                ?.map((company) => company.name)
                .join(" - ") || "N/A"
            }
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-12 left-5 bg-darkAccent rounded-full px-3 py-2.5 flex flex-row items-center justify-center z-50 shadow-md"
      >
        <Image
          source={icons.arrow}
          className="size-5 rotate-180"
          tintColor="#fff"
        />
        <Text className="text-white font-medium ml-1">Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
