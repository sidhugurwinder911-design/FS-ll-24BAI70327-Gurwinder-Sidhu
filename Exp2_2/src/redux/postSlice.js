import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      id: 1,
      title: "Welcome Post",
      content: "This is my first Redux post.",
      platform: "Twitter",
      date: new Date().toLocaleString(),
    },
  ],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
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

/* ---------------------------
   Basic Selectors
---------------------------- */

export const selectPosts = (state) => state.posts.posts;

export const selectPlatform = (state) =>
  state.platform.selected;

/* ---------------------------
   Memoized Selector
---------------------------- */

export const selectFilteredPosts = createSelector(
  [selectPosts, selectPlatform],
  (posts, platform) => {
    console.log("Memoized Selector Running...");

    return posts.filter(
      (post) => post.platform === platform
    );
  }
);

/* ---------------------------
   Derived State
---------------------------- */

export const selectStatistics = createSelector(
  [selectPosts],
  (posts) => ({
    total: posts.length,
    twitter: posts.filter(
      (p) => p.platform === "Twitter"
    ).length,
    linkedin: posts.filter(
      (p) => p.platform === "LinkedIn"
    ).length,
    instagram: posts.filter(
      (p) => p.platform === "Instagram"
    ).length,
  })
);