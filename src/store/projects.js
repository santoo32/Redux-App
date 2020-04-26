import { createSlice } from "@reduxjs/toolkit";

let globalId = 0;

// Creates actions and reducers in one file
// BEST OVERALL WAY

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        id: ++globalId,
        description: action.payload.description,
      });
    },
  },
});

export default slice.reducer;
export const { projectAdded } = slice.actions;
