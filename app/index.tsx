import AppHeader from "@/components/ui/app-header";
import AddTaskButton from "@/components/ui/task/add-task-button";
import TaskList from "@/components/ui/task/task-list";
import React from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

const HomePage = () => {
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      keyboardVerticalOffset={80}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 gap-8 py-8">
        <AppHeader title="tasked" />
        <TaskList />
        <AddTaskButton />
      </View>
    </KeyboardAvoidingView>
  );
};

export default HomePage;
