"use client";

import { Database } from "@/types/supabase";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

export type Jobs = Database["public"]["Tables"]["jobs"]["Row"];

interface BarChartProps {
  jsondata: Jobs[] | null; //fix later
}
//fix forEach types damn you

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const BarChart: React.FC<BarChartProps> = ({ jsondata }) => {
  const monthFrequencies: number[] = new Array(12).fill(0);

  // Iterate through the data and count the frequencies
  jsondata?.forEach((entry) => {
    const date = new Date(entry.inserted_at);
    if (date.getFullYear() === 2024) {
      const month = date.getMonth(); // getMonth() returns 0 for January, 1 for February, and so on
      monthFrequencies[month]++;
    }
  });
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Jobs",
        data: monthFrequencies,
        backgroundColor: "aqua",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-[#181C3A] rounded-lg mt-2">
      <Bar data={data}></Bar>
    </div>
  );
};

export default BarChart;
