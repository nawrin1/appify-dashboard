"use client";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "@/redux/hook/hook";
import { DATA } from "@/data/data";

export default function RevenueChart() {
  const { date } = useAppSelector((state) => state.dashboard);

  // Filter Logic
  let displayData = DATA.revenue;
  if (date === "Last 7 days") {
    displayData = DATA.revenue.slice(-4);
  } else if (date === "Last 30 days") {
    displayData = DATA.revenue.slice(-8);
  }

  return (
    <div className="h-[420px] w-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] p-3 rounded-xl shadow-2xl overflow-hidden group flex flex-col">
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#90c55a] shadow-[0_0_10px_#90c55a]" />
            <h3 className="text-white text-lg font-bold tracking-tight">
              Revenue Over Time
            </h3>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full ">
          <span className="text-[10px] text-[#90c55a] font-bold uppercase tracking-wider">
            Live Updates
          </span>
        </div>
      </div>
      {/* chart */}

      <div className="h-[350px] flex-1 border border-white/[0.08]  w-full bg-white/[0.02] backdrop-blur-md p-6 rounded-2xl shadow-2xl overflow-hidden group">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={displayData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#90c55a" stopOpacity={1} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={1} />
              </linearGradient>

              <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#90c55a" stopOpacity={0.2} />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity={0.05} />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="rgba(255,255,255,0.05)"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />

            <Tooltip
              cursor={{ stroke: "rgba(255,255,255,0.1)", strokeWidth: 2 }}
              contentStyle={{
                backgroundColor: "rgba(13, 17, 28, 0.8)",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.5)",
                color: "#fff",
              }}
              itemStyle={{ color: "#90c55a", fontWeight: "bold" }}
            />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="url(#colorGradient)"
              strokeWidth={4}
              fillOpacity={1}
              fill="url(#fillGradient)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
