import ITask from "@/interfaces/task";
import useTasksStore from "@/store/tasks";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { View } from "react-native";
import TaskEmptyState from "./task-empty-state";
import TaskItem from "./task-item";

const TaskList = () => {
  const { tasks, updateTask, deleteTask } = useTasksStore();
  return (
    <View className="flex-1">
      <FlashList
        data={tasks}
        renderItem={({ item }: { item: ITask }) => (
          <TaskItem
            id={item.id}
            title={item.title}
            checked={item.checked}
            onCheckedChange={(checked) => {
              updateTask({ ...item, checked });
            }}
            onUpdateTitle={(title) => {
              updateTask({ ...item, title });
            }}
            onDeleteTask={(id) => {
              deleteTask(id);
            }}
          />
        )}
        ListEmptyComponent={<TaskEmptyState />}
        ItemSeparatorComponent={() => <View className="h-1" />}
        keyExtractor={(item: ITask) => item.id.toString()}
      />
    </View>
  );
};

export default TaskList;
