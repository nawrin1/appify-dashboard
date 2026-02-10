'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import { toggleMenu } from '@/redux/store/slice/DashboardSlice';
import { Bell, LogOut, Menu, Settings, User } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';


const Header = () => {
  const dispatch = useAppDispatch();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="h-20 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-4 md:px-10 sticky top-0 z-40 shadow-2xl">
      
     
      <div className="flex items-center gap-4">
        <button 
          onClick={() => dispatch(toggleMenu())} 
          className="lg:hidden p-2 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all"
        >
          <Menu size={24} />
        </button>
        

      </div>

     
      <div className="flex flex-col items-center">
        <h1 className="text-xl md:text-2xl font-black tracking-[0.3em] uppercase bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent ">
          Analytics
        </h1>
        <div className="h-[2px] w-8 bg-[#90c55a] rounded-full mt-1 shadow-[0_0_10px_#90c55a]" />
      </div>

      
      <div className="flex items-center gap-2 md:gap-5">
        
        {/* Notification  */}
        <button className="relative p-2.5 text-slate-400 hover:bg-white/5 hover:text-white rounded-xl transition-all group">
          <Bell size={22} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#90c55a] rounded-full border-2 border-[#090d16]"></span>
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-3 p-1 rounded-full hover:bg-white/5 transition-all border border-transparent hover:border-white/10"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#90c55a] to-emerald-800 rounded-full flex items-center justify-center text-white shadow-lg border border-white/20">
              <User size={20} strokeWidth={2.5} />
            </div>
          </button>

          {/* dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-4 w-56 bg-[#0d111c] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] py-2 z-50 animate-in fade-in zoom-in-95 duration-200 backdrop-blur-xl">
              <div className="px-4 py-3 border-b border-white/5 mb-1">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Administrator</p>
                <p className="text-sm text-white font-semibold truncate">admin@appify.dev</p>
              </div>
              
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                <User size={16} /> Profile Settings
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                <Settings size={16} /> System Settings
              </button>
              
              <div className="mt-1 pt-1 border-t border-white/5">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-500/10 transition-colors font-semibold">
                  <LogOut size={16} /> Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;