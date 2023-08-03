import * as React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import { useMediaQuery } from "@mui/material";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 10000,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 8000,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 1000,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 1500,
    pv: 200,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 0,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 5000,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 6000,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 9000,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 10000,
    amt: 2100,
  },
];

const lineStyle = {
  boxShadow: "0px 20px 20px rgba(0, 0, 0, 0.10)",
};

export default function FundsManger() {
  const isWidth1240 = useMediaQuery("(width: 1240px)");
  return (
    <ResponsiveContainer width="100%" height={113}>

      <LineChart data={data}>
        <Line
          style={lineStyle}
          type="monotone"
          dataKey="pv"
          stroke="#CE57D0"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
