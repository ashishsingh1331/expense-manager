/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import MonthlyExpenseBarChart from "../features/dashboard/MonthlyExpenseBarChart";
import MonthlyExpensePieChart from "../features/dashboard/MonthlyExpensePieChart";
import ExpenseAdd from "../features/expense/ExpenseAdd";
import { getExpenses } from "../services/apiExpense";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateExpenses } from "../features/expense/ExpenseSlice";
import { getUserId } from "../features/user/userSlice";
import useGetUserExpenses from "../hooks/useGetUserExpenses";
function Dashboard() {
  useGetUserExpenses();
  const expenses = useSelector((state) => state.expense.expenses);
  return (
    <div>
      <ExpenseAdd />
      <div className="flex flex-wrap">
        <div className="w-1/2 p-4">
          <MonthlyExpenseBarChart expenses={expenses} />
        </div>
        <div className="w-1/2 p-4">
          <div className=" text-white p-4 rounded">
            <MonthlyExpensePieChart expenses={expenses} />
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-yellow-500 text-white p-4 rounded">
            Grid Item 3
          </div>
        </div>
        <div className="w-1/2 p-4">
          <div className="bg-red-500 text-white p-4 rounded">Grid Item 4</div>
        </div>
      </div>
    </div>
  );
}

export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}

export default Dashboard;
