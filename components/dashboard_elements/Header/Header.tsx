import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import { toggleMenu } from '@/redux/store/slice/DashboardSlice'
import { Bell, LogOut, Menu, Settings, User } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {
      const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
      const dispatch = useAppDispatch();
    
    
    

      const [isProfileOpen, setIsProfileOpen] = useState(false);
  return (
        <header className="h-16 bg-[#090d16] border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 shadow-sm">
          
          {/* Mobile Hamburger Menu */}
          <button onClick={() => dispatch(toggleMenu())} className="lg:hidden p-2 hover:bg-slate-100 rounded-lg">
            <Menu size={24} />
          </button>

          {/* Search Bar Logic */}
          <div className=" text-3xl text-center    w-[80%]">
           ANALYTICS DASHBOARD
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full">
               <Bell size={22} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Dropdown Logic */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 pl-4 border-l hover:opacity-80 transition-opacity"
              >
               
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                  <User size={20} />
                </div>
              </button>

              {/* Actual Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-white border border-slate-200 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <p className="text-xs text-slate-400 font-semibold uppercase">My Account</p>
                  </div>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                    <User size={16} /> Profile 
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50">
                    <Settings size={16} /> System settings
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 border-t border-slate-100 mt-1">
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
  )
}

export default Header