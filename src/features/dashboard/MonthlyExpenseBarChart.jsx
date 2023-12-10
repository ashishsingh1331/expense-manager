// MonthlyExpenseBarChart.js
import { useEffect, useState } from "react";
import BarChartComponent from "../charts/BarChart";

const MonthlyExpenseBarChart = () => {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      let data = await res.json();
      console.log(data);

      // Todo: Replace hardcoded data with API response
      data = [
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