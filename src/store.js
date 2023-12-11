import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../src/features/expense/ExpenseSlice";

const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export default store;
