import { useAppSelector } from '@/redux/hook/hook';
import { LogOut, Settings } from 'lucide-react'
import React from 'react'

// this is bottom section of sidebar
const Bottom_section = () => {
  const { isSidebarOpen, isMenuOpen } = useAppSelector((state) => state.dashboard);
  return (
            <div className="p-4 border-t border-white/5 mt-20 space-y-1 ">
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 cursor-pointer transition-all text-slate-400 hover:text-white group">
                <Settings size={22} className="min-w-5.5 group-hover:rotate-45 transition-transform duration-500" />
                <span className={`
                  font-medium transition-all duration-300 ${!isSidebarOpen && !isMenuOpen ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
                >
                  Settings
                </span>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-rose-500/10 cursor-pointer transition-all text-slate-400 hover:text-rose-500 group">
                <LogOut size={22} className="min-w-5.5" />
                <span className={`
                  font-medium transition-all duration-300 ${!isSidebarOpen && !isMenuOpen ? "opacity-0 translate-x-10" : "opacity-100 translate-x-0"}`}
                >
                  Logout
                </span>
              </div>
            </div>
  )
}

export default Bottom_section