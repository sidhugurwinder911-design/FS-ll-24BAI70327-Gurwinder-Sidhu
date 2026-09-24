import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: "Twitter",
};

const platformSlice = createSlice({
  name: "platform",
  initialState,
  reducers: {
    changePlatform: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { changePlatform } = platformSlice.actions;

export default platformSlice.reducer;