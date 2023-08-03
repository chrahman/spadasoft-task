import React from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
  {
    name: "Page B",
    uv: 0,
    pv: 200,
    amt: 200,
    fill: "rgba(183, 90, 255, 1)",
  },

  {
    name: "Page E",
    uv: 0,
    pv: 150,
    amt: 200,
    fill: "rgba(245, 70, 177, 1)",
  },
];

export default function OverviewSales() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <BarChart
      width={matches ? 596 : 320}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="rgba(183, 90, 255, 1)" />
      <Bar dataKey="uv" fill="rgba(245, 70, 177, 1)" />
    </BarChart>
  );
}