import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "request",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    deleteRequest: (state, action) => {
      return state.filter((req) => req._id !== action.payload);
    },
    removeRequest: (state, action) => {
      return null;
    },
  },
});

export const { addRequests, deleteRequest, removeRequest } =
  requestSlice.actions;
export default requestSlice.reducer;
