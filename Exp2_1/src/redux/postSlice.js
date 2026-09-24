import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",

  initialState: {
    posts: [
      {
        id: 1,
        platform: "LinkedIn",
        content: "FULL STACK",
      },
    ],
  },

  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },

    deletePost: (state, action) => {
      state.posts = state.posts.filter(
        (post) => post.id !== action.payload
      );
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;