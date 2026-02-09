import {  useAppSelector } from "@/redux/hook/hook";
import { ArrowLeftRight, ChartLine, LayoutDashboard, UserCheck } from "lucide-react";


const Nav_items = () => {
      const { isSidebarOpen, isMenuOpen } = useAppSelector(
        (state) => state.dashboard,
      );
      
      const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', active: true },
  { icon: UserCheck, label: 'Customers', active: false },
  { icon: ArrowLeftRight, label: 'Transactions', active: false },
  { icon: ChartLine, label: 'Insights', active: false },
];

  return (
            <nav className="flex-1 mt-4 px-3 space-y-4">
          {menuItems.map((item) => (
            <div 
              key={item.label} 
              className={
                `group flex items-center gap-4 p-3 rounded-xl cursor-pointer transition-all duration-300 relative ${
                  item.active 
                    ? " text-[#90c55a]" 
                    : "hover:bg-white/5 hover:text-white"
                }`}
            >
              {/* Active */}
              {item.active && (
                <div className="absolute left-0 w-1 h-6 bg-[#90c55a] rounded-r-full" />
              )}
              
              <item.icon size={22} className={`min-w-5.5 ${item.active ? "text-green-500" : "group-hover:scale-110 transition-transform"}`} />
              
              <span className={
                `font-medium whitespace-nowrap transition-all duration-300 ${(!isSidebarOpen && !isMenuOpen) ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </nav>
  )
}

export default Nav_items