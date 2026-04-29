import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Goal {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface GoalState {
  goals: Goal[];
}

const initialState: GoalState = {
  goals: [],
};

const goalSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    setGoals: (state, action: PayloadAction<Goal[]>) => {
      state.goals = action.payload;
    },
    addGoal: (state, action: PayloadAction<Goal>) => {
      state.goals.push(action.payload);
    },
    removeGoal: (state, action: PayloadAction<number>) => {
      state.goals = state.goals.filter(
        (goal) => goal.id !== action.payload
      );
    },
  },
});

export const { setGoals, addGoal, removeGoal } = goalSlice.actions;
export default goalSlice.reducer;