import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeedUser: (state, action) => {
      return action.payload;
    },
    removeFeedUser: (state, action) => {
      const newFeed = state.filter((user) => user._id !== action.payload);
      return newFeed;
    },
    deleteFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeedUser, removeFeedUser, deleteFeed } = feedSlice.actions;
export default feedSlice.reducer;
