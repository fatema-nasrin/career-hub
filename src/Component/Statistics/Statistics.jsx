import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Header from "../Header/Header";

const data = [
  {
    name: "A1",
    marks: 57,
  },
  {
    name: "A2",
    marks: 45,
  },
  {
    name: "A3",
    marks: 50,
  },
  {
    name: "A4",
    marks: 58,
  },
  {
    name: "A5",
    marks: 48,
  },
  {
    name: "A6",
    marks: 29,
  },
  {
    name: "A7",
    marks: 60,
  },
  {
    name: "A8",
    marks: 29,
  },
];

const Statistics = () => {
  return (
    <div>
      <Header />

      <div className="my-container">
        <h1 className="text-center underline mb-6">Assignment marks</h1>

        <ResponsiveContainer width="100%" aspect={3}>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                <stop
                  offset="75%"
                  stopColor="#2451B7"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <CartesianGrid opacity={0.9} vertical={false} />
            <XAxis dataKey="name" tickLine={false} />
            <YAxis tickLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="marks"
              stroke="#2451B7"
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
