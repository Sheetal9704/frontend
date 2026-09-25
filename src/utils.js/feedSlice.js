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
  },
});

export const { addFeedUser, removeFeedUser } = feedSlice.actions;
export default feedSlice.reducer;
