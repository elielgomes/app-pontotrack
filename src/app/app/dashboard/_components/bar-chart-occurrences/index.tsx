"use client";

import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Fev",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Abr",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Mai",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Ago",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Set",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Out",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 100) + 10,
  },
  {
    name: "Dez",
    total: Math.floor(Math.random() * 100) + 10,
  },
];

const currentMonthIndex = new Date().getMonth();

const nextMonthIndex = (currentMonthIndex + 1) % 12;

const nextMonthName = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
][nextMonthIndex];

const nextDataIndex = data.findIndex((item) => item.name === nextMonthName);

const reorderedData = [
  ...data.slice(nextDataIndex),
  ...data.slice(0, nextDataIndex),
];

export const BarChartOccurrences: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={reorderedData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
