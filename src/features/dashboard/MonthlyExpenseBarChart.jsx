// MonthlyExpenseBarChart.js
import { useEffect, useState } from "react";
import BarChartComponent from "../charts/BarChart";

const MonthlyExpenseBarChart = ({ expenses }) => {
  const [data, setdata] = useState();

  console.log(expenses);

  useEffect(() => {
    const fetchDatas = async () => {
      // Todo: Replace hardcoded data with API response
      let data = [
        {
          id: 1,
          month: "November",
          totalexpense: 165000,
        },
        {
          id: 2,
          month: "December",
          totalexpense: 58000,
        },
      ];
      setdata(data);
    };
    fetchDatas();
  }, []);
  return <BarChartComponent data={data} />;
};

export default MonthlyExpenseBarChart;
