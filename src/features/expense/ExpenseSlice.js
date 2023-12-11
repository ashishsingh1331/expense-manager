import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addExpense } from "../../services/apiExpense";

const initialState = {
  expenses: [],
  status: "",
};

// Async thunk to handle asynchronous logic
export const addExpenseThunk = createAsyncThunk(
  "expense/addExpense",
  async (expense) => {
    // Make API call or any asynchronous operation here
    const data = await addExpense(expense);
    return data;
  }
);

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    updateExpenses(state, actions) {
      state.expenses = actions.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(addExpenseThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addExpenseThunk.fulfilled, (state, action) => {
        state.expenses.push(action.payload[0]);
        state.status = "idle";
      })
      .addCase(addExpenseThunk.rejected, (state) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address. Make sure to fill this field!";
      }),
});

export default expenseSlice.reducer;
export const { updateExpenses } = expenseSlice.actions;
