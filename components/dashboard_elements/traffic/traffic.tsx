"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DATA } from "@/data/data";

export default function Traffic() {
  const displayData = DATA.traffic.map((item, index) => ({
    ...item,
    opacity: 1 - index * 0.15,
  }));

  return (
    <div className="h-[420px] w-full bg-[#0d111c]/60 backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl shadow-2xl flex flex-col group overflow-hidden">
      {/* Title */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#90c55a] shadow-[0_0_12px_#90c55a]" />
            <h3 className="text-white text-lg font-bold tracking-tight">
              Traffic Source
            </h3>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={displayData}
            margin={{ top: 0, right: 60, left: 10, bottom: 0 }}
            barCategoryGap="30%"
          >
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#90c55a" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#90c55a" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis type="number" hide />

            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
              width={100}
              tick={{ fill: "#94a3b8", fontSize: 13, fontWeight: 700 }}
            />

            <Tooltip
              cursor={{ fill: "rgba(255, 255, 255, 0.03)", radius: 10 }}
              contentStyle={{
                backgroundColor: "rgba(13, 17, 28, 0.95)",
                backdropFilter: "blur(12px)",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                padding: "10px",
              }}
              itemStyle={{ color: "#90c55a", fontWeight: "bold" }}
            />

            <Bar
              dataKey="value"
              fill="url(#barGrad)"
              barSize={12}
              animationDuration={1800}
              shape={(props) => {
                const { x, y, width, height, opacity } = props;
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill="url(#barGrad)"
                    fillOpacity={opacity}
                    rx={height / 2}
                    ry={height / 2}
                  />
                );
              }}
              label={{
                position: "right",
                fill: "#fff",
                fontSize: 12,
                fontWeight: 800,
                dx: 15,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-6 border-t border-white/5 flex justify-between items-center">
        <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
          Total Volume
        </span>
        <span className="text-white text-2xl font-black italic tracking-tighter">
          {displayData
            .reduce((acc, curr) => acc + curr.value, 0)
            .toLocaleString()}
        </span>
      </div>
    </div>
  );
}
