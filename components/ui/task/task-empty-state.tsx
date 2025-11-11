import React from "react";
import { Text, View } from "react-native";

const TaskEmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center py-32">
      <Text className="text-2xl font-bold text-center">No tasks yet</Text>
      <Text className="text-lg text-center line-height-8 text-gray-500">
        Your to-do list is empty. {"\n"}Add a new task to get started!
      </Text>
    </View>
  );
};

export default TaskEmptyState;
