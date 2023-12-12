function ExpenseListItem({ expense }) {
  const { expenseDetail, expenseCategory, expenseAmount, expenseDate } =
    expense;

  return (
    <div className=" grid grid-cols-4">
      <div>{expenseDetail}</div>
      <div>{expenseCategory}</div>
      <div>{expenseDate}</div>
      <div>{expenseAmount}</div>
    </div>
  );
}

export default ExpenseListItem;
