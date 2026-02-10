'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Bell, UserCircle, Search, Menu, LogOut, Settings, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import Sidebar from '@/components/layout/sidebar';
import Head from 'next/head';
import Header from '@/components/dashboard_elements/Header/Header';
import Kpi from '@/components/dashboard_elements/Kpi/Kpi';
import { setDate, setUser } from '@/redux/store/slice/DashboardSlice';
import CustomFilter from '@/components/dashboard_elements/CustomFilter/CustomFilter';



export default function Home() {
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
    const { date, user } = useAppSelector((state) => state.dashboard);




  // filters options
  const dateOptions = ['Last 7 days', 'Last 30 days', 'Last 12 months'];
  const userTypeOptions = ['All Users', 'Free', 'Premium', 'Enterprise'];


  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#090d16]">
      <Sidebar />
       <main className={` transition-all duration-300 w-full ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <Header></Header>

                <div className="p-4 md:p-8 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-2xl font-extrabold text-white/80">KPI Overview</h2>
            <div className="flex gap-3 w-full md:w-auto">
              

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <CustomFilter 
                label="Date Range"
                options={dateOptions}
                selectedValue={date}
                onSelect={(val) => dispatch(setDate(val))}
              />
              <CustomFilter
                label="User Type"
                options={userTypeOptions}
                selectedValue={user}
                onSelect={(val) => dispatch(setUser(val))}
              />
         
          </div>
            </div>
          </div>

          <Kpi />
          </div>
       </main>

      

    </div>
  );
}