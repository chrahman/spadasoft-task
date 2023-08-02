import React from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
  {
    name: "Page B",
    uv: 0,
    pv: 200,
    amt: 200,
  },

  {
    name: "Page E",
    uv: 0,
    pv: 150,
    amt: 200,
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
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
  );
}
