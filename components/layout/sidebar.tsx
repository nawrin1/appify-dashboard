"use client";

import { ChevronLeft, X} from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/redux/hook/hook";
import { closeMenu, toggleSidebar } from "@/redux/store/slice/DashboardSlice";
import Bottom_section from "../dashboard_elements/sidebar_elements/Bottom_section/Bottom_section";
import Nav_items from "../dashboard_elements/sidebar_elements/Nav_items/Nav_items";

export default function Sidebar() {
  const { isSidebarOpen, isMenuOpen } = useAppSelector(
    (state) => state.dashboard,
  );
  const dispatch = useAppDispatch();

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => dispatch(closeMenu())}
      />

      <aside
        className={`
       
        "fixed left-0 top-0 h-screen bg-[#0d111c] text-slate-400 transition-all duration-500 ease-in-out z-[70] border-r border-white/5 shadow-2xl overflow-hidden",
        
        
        ${isSidebarOpen ? "w-64" : "w-20"},
        
        
        isMenuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 min-h-20">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="min-w-8 h-8 bg-[#90c55a] rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
              A
            </div>
            {(isSidebarOpen || isMenuOpen) && (
              <span className="font-bold text-xl text-white tracking-tight animate-in fade-in slide-in-from-left-2 duration-300">
                APPIFY
              </span>
            )}
          </div>

          {/* Desktop Toggle Button */}
          <button
            onClick={() => dispatch(toggleSidebar())}
            className="hidden lg:flex p-1.5 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
          >
            <ChevronLeft
              className={`transition-transform duration-500 ${!isSidebarOpen ? "rotate-180" : ""}`}
              size={20}
            />
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => dispatch(closeMenu())}
            className="lg:hidden p-1.5 hover:bg-white/10 rounded-lg text-slate-400"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Items */}
     
          <Nav_items></Nav_items>


        {/* Bottom Section ) */}
        <Bottom_section />
      </aside>
    </>
  );
}
