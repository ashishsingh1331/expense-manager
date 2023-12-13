import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    getUserId(getState) {
      console.log(getState);
      return getState;
    },
  },
});

export default userSlice.reducer;
export const { setUser, getUserId } = userSlice.actions;
