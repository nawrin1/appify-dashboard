'use client';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";
import { useAppSelector } from "@/redux/hook/hook";
import { DATA } from "@/data/data";

export default function Order() {
  const { date } = useAppSelector((state) => state.dashboard);

  // Filter Logic
  let displayData = DATA.revenue;
  if (date === "Last 7 days") {
    displayData = DATA.revenue.slice(-4);
  } else if (date === "Last 30 days") {
    displayData = DATA.revenue.slice(-8);
  }

  return (
    <div className="h-[420px] w-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] p-5 rounded-2xl shadow-2xl overflow-hidden group flex flex-col">
      
      {/* Title  */}
      <div className="flex items-center justify-between mb-8 px-2">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
          
            <div className="w-2 h-2 rounded-full bg-[#fc2047] shadow-[0_0_10px_#fc2047]" />
            <h3 className="text-white text-lg font-bold tracking-tight">
              Orders Per Month
            </h3>
          </div>
          
        </div>

        <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full ">
          <span className="text-[10px] text-[#90c55a] font-bold uppercase tracking-wider">
            Live Updates
          </span>
        </div>
      </div>

      {/* Chart  */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={displayData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#90c55a" stopOpacity={1} />
                <stop offset="100%" stopColor="#90c55a" stopOpacity={0.3} />
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
             
              cursor={{ fill: 'rgba(255, 255, 255, 0.05)', radius: 8 }}
              contentStyle={{
                backgroundColor: "rgba(13, 17, 28, 0.9)",
                backdropFilter: "blur(12px)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
                color: "#fff",
              }}
              itemStyle={{ color: "#90c55a", fontWeight: "bold" }}
            />

            <Bar
              dataKey="amount"
              fill="url(#barGradient)" 
              radius={[4, 4, 0, 0]} 
              barSize={24}
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}