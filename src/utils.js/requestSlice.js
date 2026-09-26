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
  },
});

export const { addRequests, deleteRequest } = requestSlice.actions;
export default requestSlice.reducer;
