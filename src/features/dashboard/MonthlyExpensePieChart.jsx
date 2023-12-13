// MonthlyExpensePieChart.js
import { useEffect, useState } from "react";
import PieChartComponent from "../charts/PieChartComponent";
import { getRandomHexColor } from "../../utils/helper";

const MonthlyExpensePieChart = ({ expenses }) => {
  const [data, setdata] = useState([]);
  const [colors, setColors] = useState();

  console.log(expenses);

  useEffect(() => {
    const fetchDatas = async () => {
      let data;

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
