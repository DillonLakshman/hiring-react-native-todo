import useTasksStore from "@/store/tasks";
import { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const AddTaskButton = () => {
  const { addTask, mode } = useTasksStore();
  const scale = useSharedValue(1);
  const rotation = useSharedValue(0);

  // Animate rotation when mode changes
  useEffect(() => {
    if (mode === "editing") {
      rotation.value = withSpring(45, {
        damping: 10,
        stiffness: 150,
      });
    } else {
      rotation.value = withSpring(0, {
        damping: 10,
        stiffness: 150,
      });
    }
  }, [mode]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }, { rotate: `${rotation.value}deg` }],
    };
  });

  const handlePress = () => {
    // Subtle and faster bounce
    scale.value = withSpring(0.95, { damping: 6, stiffness: 350 }, () => {
      scale.value = withSpring(1, { damping: 8, stiffness: 200 });
    });

    addTask({ id: Date.now(), title: "", checked: false });
  };

  return (
    <View className="px-8 absolute bottom-0 right-0 py-4 ">
      <Animated.View style={animatedStyle}>
        <TouchableOpacity
          onPress={handlePress}
          className="bg-[#51ACB4] w-14 h-14 rounded-full flex items-center justify-center"
        >
          <Image
            source={require("@/assets/icons/plus.png")}
            className="w-10 h-10"
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AddTaskButton;
