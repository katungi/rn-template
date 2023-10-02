import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

const BannerDetail = () => {
  const { title, id, description } = useLocalSearchParams();
  return (
    <View className="flex-1 items-center pt-20">
      <Stack.Screen
        options={{
          headerTitle: `Banner - ${title}`,
        }}
      />
      <Text className="text-2xl uppercase dark:text-white">BannerDetail</Text>
      <Text className="text-lg uppercase dark:text-white">{title}</Text>
      <Text className="text-lg uppercase dark:text-white">{id}</Text>
      <Text className="text-lg uppercase dark:text-white">{description}</Text>
    </View>
  );
};

export default BannerDetail;
