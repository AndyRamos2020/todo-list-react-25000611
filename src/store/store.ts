import { configureStore } from "@reduxjs/toolkit";
import goalReducer from "./goalSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: {
    goals: goalReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;