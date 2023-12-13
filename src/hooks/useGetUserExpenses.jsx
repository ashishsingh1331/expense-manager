import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../services/apiExpense";
import { updateExpenses } from "../features/expense/ExpenseSlice";

function useGetUserExpenses() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const userId = user && user.user?.id;
    if (user !== null) {
      getExpenses(userId)
        .then((expenses) => {
          dispatch(updateExpenses(expenses));
        })
        .catch(() => {
          throw new Error("Unable to fetch expenses");
        });
    }
  }, [user, dispatch]);
}

export default useGetUserExpenses;
