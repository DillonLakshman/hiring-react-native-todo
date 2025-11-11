import React from "react";
import { View, Text } from "react-native";

const HomePage = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Text
        style={{
          fontFamily: "TTFirs-Neue-Bold",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        tasked
      </Text>
    </View>
  );
};

export default HomePage;
