import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

const PrimaryLayout = () => {
  useFonts({
    "TTFirs-Neue-Bold": require("../assets/fonts/TTFirs-Neue-Bold.ttf"),
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaView>
  );
};

export default PrimaryLayout;
