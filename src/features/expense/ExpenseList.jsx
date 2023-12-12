/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import { useLoaderData } from "react-router-dom";
import { getExpenses } from "../../services/apiExpense";

function ExpenseList() {
  let expenses = useLoaderData();

  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  console.log(expenses);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  return (
    <div>
      <div>
        <div className=" grid grid-cols-4">
          <div className="font-bold">Expense Detail</div>
          <div className="font-bold">Description</div>
          <div className="font-bold">Expense Date</div>
          <div className="font-bold">Amount</div>
        </div>
        {filteredExpenses &&
          filteredExpenses.map((item) => {
            return <ExpenseListItem key={item.expenseId} expense={item} />;
          })}
      </div>
    </div>
  );
}

export async function loader() {
  const expenses = await getExpenses();
  return expenses;
}

export default ExpenseList;
