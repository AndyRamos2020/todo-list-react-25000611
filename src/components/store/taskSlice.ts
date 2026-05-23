import { createSlice } from "@reduxjs/toolkit";

type Task = {
  _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: [] as Task[],
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },

    addTask: (state, action) => {
      state.push(action.payload);
    },

    removeTask: (state, action) => {
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