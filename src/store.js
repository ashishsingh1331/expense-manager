import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../src/features/expense/ExpenseSlice";
import userReducer from "./features/user/userSlice";
const store = configureStore({
  reducer: {
    expense: expenseReducer,
    user: userReducer,
  },
});

export default store;
