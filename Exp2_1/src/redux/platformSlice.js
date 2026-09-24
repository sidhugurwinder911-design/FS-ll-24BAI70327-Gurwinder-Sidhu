import { createSlice } from "@reduxjs/toolkit";

const platformSlice = createSlice({
  name: "platform",

  initialState: {
    selectedPlatform: "LinkedIn",
  },

  reducers: {
    setPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
  },
});

export const { setPlatform } = platformSlice.actions;

export default platformSlice.reducer;