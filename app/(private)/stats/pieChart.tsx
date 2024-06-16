"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

interface PieChartProps {
  length: number | undefined; //fix later
}
//fix forEach types damn you

ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart: React.FC<PieChartProps> = ({ length }) => {
  const data = {
    labels: ["Current", "Available Space"],
    datasets: [
      {
        label: "# of Votes",
        data: [length, 500],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-[#181C3A] rounded-lg mt-2">
      <Pie data={data}></Pie>
    </div>
  );
};

export default PieChart;
