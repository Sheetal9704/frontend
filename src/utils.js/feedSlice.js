import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeedUser: (state, action) => {
      return action.payload;
    },
    removeFeedUser: (state, action) => {
      return state.filter((user) => action._id !== user._id);
    },
    deleteFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeedUser, removeFeedUser, deleteFeed } = feedSlice.actions;
export default feedSlice.reducer;
