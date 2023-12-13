/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

import { getExpenses } from "../../services/apiExpense";
import { updateExpenses } from "./ExpenseSlice";

function ExpenseList() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expense.expenses);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  useEffect(() => {
    getExpenses()
      .then((expenses) => {
        setFilteredExpenses(expenses);
        dispatch(updateExpenses(expenses));
      })
      .catch((error) => {
        throw new Error("Unable to fetch expenses");
      });
  }, [dispatch]);

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
