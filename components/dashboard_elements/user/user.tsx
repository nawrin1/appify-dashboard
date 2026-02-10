'use client';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { useAppSelector } from '@/redux/hook/hook';
import { DATA } from '@/data/data';


const COLORS = [
  '#90c55a', 
  '#a855f7', 
  '#3b82f6'  
];

export default function UserPieChart() {
  const {user } = useAppSelector((state) => state.dashboard);


  const displayData = (user === 'All Users' 
    ? DATA.userDistribution 
    : DATA.userDistribution.filter(item => item.name === user)
  ).map((item) => {
    
    const originalIndex = DATA.userDistribution.findIndex(u => u.name === item.name);
    return {
      ...item,
      fill: COLORS[originalIndex % COLORS.length], 
      stroke: 'none'
    };
  });

  const totalValue = displayData.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <div className="h-[420px] w-full bg-white/[0.02] backdrop-blur-md border border-white/[0.08] p-3 rounded-xl shadow-2xl flex flex-col group relative overflow-hidden">
      
      {/* Title */}
      <div className="flex flex-col gap-1 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]" />
          <h3 className="text-white text-lg font-bold tracking-tight">User Distribution</h3>
        </div>
       
      </div>

      <div className="flex-1 w-full relative">
        {/* count */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-26">
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">Total Users</span>
          <span className="text-white text-3xl font-black tracking-tighter">
            {totalValue.toLocaleString()}
          </span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={displayData}
              cx="50%"
              cy="75%" 
              startAngle={180}
              endAngle={0}
              innerRadius={90}
              outerRadius={120}
              paddingAngle={10}
              dataKey="value"
              animationDuration={1500}
             
            />
            
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ 
                backgroundColor: 'rgba(13, 17, 28, 0.95)', 
                backdropFilter: 'blur(12px)',
                borderRadius: '16px', 
                border: '1px solid rgba(255,255,255,0.1)', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                padding: '12px'
              }}
              itemStyle={{ color: '#fff', fontSize: '10px', fontWeight: 'bold' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend  */}
      <div className="flex justify-center gap-8 mb-2">
        {DATA.userDistribution.map((item, index) => {
          const isActive = user === 'All Users' || user === item.name;
          return (
            <div 
              key={item.name} 
              className={`flex flex-col items-center transition-all duration-500 ${!isActive ? 'opacity-20 grayscale' : 'opacity-100'}`}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[index] }} />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.name}</span>
              </div>
              <span className="text-white text-xs font-bold mt-1">{item.value}</span>
            </div>
          );
        })}
      </div>

     
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-24 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />
    </div>
  );
}