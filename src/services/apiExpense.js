import toast from "react-hot-toast";
import supabase from "./supabase";
export async function getExpenses(userId) {
  const { data, error } = await supabase
    .from("expense")
    .select("*")
    .eq("userId", userId);

  if (error) {
    console.error("Expenses can not be loaded");
    throw new Error("Expenses can not be loaded");
  }

  return data;
}

export async function addExpense(expense) {
  const { data, error } = await supabase
    .from("expense")
    .insert([
      {
        expenseDate: expense.date,
        expenseDetail: expense.label,
        expenseCategory: expense.category,
        expenseAmount: expense.amount,
        userId: expense.userId,
      },
    ])
    .select();

  if (error) {
    toast.error("Error in adding expense");
    throw new Error("Error in adding expense");
  }

  toast.success("Expense added successfully");
  return data;
}
