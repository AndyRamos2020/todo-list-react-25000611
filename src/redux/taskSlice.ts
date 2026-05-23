import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface TaskItem {
  _id: string;
  name: string;
  description: string;
  duedate: string;
}

const initialState: TaskItem[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (_, action: PayloadAction<TaskItem[]>) => {
      return action.payload;
    },

    addTask: (
      state,
      action: PayloadAction<TaskItem>
    ) => {
      state.push(action.payload);
    },

    removeTask: (
      state,
      action: PayloadAction<string>
    ) => {
      return state.filter(
        task => task._id !== action.payload
      );
    },
  },
});

export const {
  setTasks,
  addTask,
  removeTask
} = taskSlice.actions;

export default taskSlice.reducer;