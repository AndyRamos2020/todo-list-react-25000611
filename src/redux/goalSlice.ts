import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface GoalItem {
  _id: string;
  name: string;
  description: string;
  duedate: string;
}

const initialState: GoalItem[] = [];

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    setGoals: (_, action: PayloadAction<GoalItem[]>) => {
      return action.payload;
    },

    addGoal: (state, action: PayloadAction<GoalItem>) => {
      state.push(action.payload);
    },

    removeGoal: (
      state,
      action: PayloadAction<string>
    ) => {
      return state.filter(
        goal => goal._id !== action.payload
      );
    },
  },
});

export const {
  setGoals,
  addGoal,
  removeGoal
} = goalSlice.actions;

export default goalSlice.reducer;