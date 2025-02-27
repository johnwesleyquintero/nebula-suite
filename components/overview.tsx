"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  {
    name: "Jan",
    total: 4000,
  },
  {
    name: "Feb",
    total: 3000,
  },
  {
    name: "Mar",
    total: 2000,
  },
  {
    name: "Apr",
    total: 2780,
  },
  {
    name: "May",
    total: 1890,
  },
  {
    name: "Jun",
    total: 2390,
  },
  {
    name: "Jul",
    total: 3490,
  },
  {
    name: "Aug",
    total: 4000,
  },
  {
    name: "Sep",
    total: 5000,
  },
  {
    name: "Oct",
    total: 4500,
  },
  {
    name: "Nov",
    total: 5500,
  },
  {
    name: "Dec",
    total: 6000,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Revenue"]}
          contentStyle={{
            backgroundColor: "var(--background)",
            borderColor: "var(--border)",
            borderRadius: "var(--radius)",
          }}
        />
        <Bar dataKey="total" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

