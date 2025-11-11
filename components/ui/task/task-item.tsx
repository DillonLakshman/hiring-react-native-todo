import useTasksStore from "@/store/tasks";
import { Checkbox } from "expo-checkbox";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const TaskItem = ({
  id,
  title,
  checked,
  onCheckedChange,
  onUpdateTitle,
  onDeleteTask,
}: {
  id: number;
  title: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  onUpdateTitle: (title: string) => void;
  onDeleteTask: (id: number) => void;
}) => {
  const { setMode: setModeStore } = useTasksStore();

  const [mode, setMode] = useState<"normal" | "editing">("normal");
  const [titleText, setTitleText] = useState(title);
  const onLongPress = () => {
    setMode("editing");
  };

  const inputRef = React.useRef<TextInput>(null);

  useEffect(() => {
    if (title === "") {
      setMode("editing");
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [title]);

  useEffect(() => {
    if (mode === "editing") {
      setModeStore("editing");
    }
  }, [mode]);

  return (
    <View
      className={[
        "flex flex-row items-center gap-4 px-8 py-4 w-full",
        mode === "editing" ? "bg-gray-100" : "",
      ].join(" ")}
    >
      <View
        className={[
          "flex items-center justify-center",
          checked ? "bg-[#51ACB4]" : "bg-black",
        ].join(" ")}
        style={{ borderRadius: 8, width: 24, height: 24 }}
      >
        <Checkbox
          value={checked}
          onValueChange={onCheckedChange}
          color="#51ACB4"
          style={{ width: 16, height: 16, borderRadius: 6, borderWidth: 0 }}
          accessibilityLabel={title}
          accessibilityRole="checkbox"
          accessibilityState={{ checked }}
          accessible={true}
        />
      </View>
      {mode === "normal" ? (
        <TouchableOpacity
          onLongPress={() => onLongPress()}
          onPress={() => onCheckedChange(!checked)}
          activeOpacity={0.4}
          className="flex-1"
        >
          <Text
            className={[
              "text-xl flex-1",
              checked ? "line-through text-gray-500" : "text-black",
            ].join(" ")}
            style={{ fontFamily: "DMSans-Regular" }}
            accessibilityLabel={title}
            accessibilityRole="text"
            accessible={true}
          >
            {title}
          </Text>
        </TouchableOpacity>
      ) : (
        <View className="flex-1 flex-row items-center justify-between">
          <TextInput
            ref={inputRef}
            className="text-xl flex-1 -mt-2"
            style={{ fontFamily: "DMSans-Regular" }}
            accessibilityLabel={title}
            accessibilityRole="text"
            accessible={true}
            value={titleText}
            onChangeText={(text) => setTitleText(text)}
            onEndEditing={() => {
              setMode("normal");
              setModeStore("normal");
              onUpdateTitle(titleText);
              if (titleText === "") {
                onDeleteTask(id);
              }
            }}
          />

          <TouchableOpacity
            onPress={() => {
              setModeStore("normal");
              onDeleteTask(id);
            }}
          >
            <Image
              source={require("@/assets/icons/delete.png")}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TaskItem;
