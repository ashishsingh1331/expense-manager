// MonthlyExpensePieChart.js
import { useEffect, useState } from "react";
import PieChartComponent from "../charts/PieChartComponent";
import { getRandomHexColor } from "../../utils/helper";

const MonthlyExpensePieChart = () => {
  const [data, setdata] = useState([]);
  const [colors, setColors] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      let data = await res.json();

      // Todo: Replace hardcoded data with API response
      data = [
        { name: "Education", value: 2600 },
        { name: "Grocery", value: 7000 },
        { name: "Transport", value: 1500 },
        { name: "Food and dining", value: 2300 },
      ];
      setdata(data);
      setColors(
        Array.from({ length: data.length }).map(() => getRandomHexColor())
      );
    };
    fetchDatas();
  }, []);
  return <PieChartComponent data={data} colors={colors} />;
};

export default MonthlyExpensePieChart;
