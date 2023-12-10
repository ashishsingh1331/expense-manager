import MonthlyExpenseBarChart from "../features/dashboard/MonthlyExpenseBarChart";
import MonthlyExpensePieChart from "../features/dashboard/MonthlyExpensePieChart";
import ExpenseAdd from "../features/expense/ExpenseAdd";
function Dashboard() {
  return (
    <div>
      <ExpenseAdd />
      <div className="flex flex-wrap">
        <div className="w-1/2 p-4">
          <MonthlyExpenseBarChart />
        </div>
        <div className="w-1/2 p-4">
          <div className=" text-white p-4 rounded">
            <MonthlyExpensePieChart />
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

export default Dashboard;
