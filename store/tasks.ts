import ITask from "@/interfaces/task";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface TasksState {
  tasks: ITask[];
  mode: "normal" | "editing";
  addTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
  deleteTask: (id: number) => void;
  setMode: (mode: "normal" | "editing") => void;
}

const useTasksStore = create<TasksState>()(
  persist(
    (set) => ({
      tasks: [],
      mode: "normal",
      setMode: (mode: "normal" | "editing") => set({ mode }),
      addTask: (task: ITask) =>
        set((state) => ({ tasks: [...state.tasks, task] })),
      updateTask: (task: ITask) =>
        set((state) => ({
          tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
        })),
      deleteTask: (id: number) =>
        set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
    }),
    {
      name: "tasks",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useTasksStore;
