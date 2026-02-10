"use client";

import React, { useState, useEffect } from "react"; 
import { useAppDispatch, useAppSelector } from "@/redux/hook/hook";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/dashboard_elements/Header/Header";
import Kpi from "@/components/dashboard_elements/Kpi/Kpi";
import { setDate, setUser } from "@/redux/store/slice/DashboardSlice";
import CustomFilter from "@/components/dashboard_elements/CustomFilter/CustomFilter";
import RevenueChart from "@/components/dashboard_elements/Revenue/Revenue";
import Order from "@/components/dashboard_elements/Order/Order";
import User from "@/components/dashboard_elements/user/user";
import Traffic from "@/components/dashboard_elements/traffic/traffic";
import DashboardSkeleton from "@/components/dashboard_elements/DashboardSkeleton/DashboardSkeleton";


export default function Home() {
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  const { date, user } = useAppSelector((state) => state.dashboard);

 
  const [isLoading, setIsLoading] = useState(true);

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const dateOptions = ["Last 7 days", "Last 30 days", "Last 12 months"];
  const userTypeOptions = ["All Users", "Free", "Premium", "Enterprise"];

  return (
    <div className="flex min-h-screen bg-[#090d16]">
      <Sidebar />
      <main className={`transition-all duration-300 w-full ${isSidebarOpen ? "lg:pl-56" : "lg:pl-20"}`}>
        <Header />

        <div className="p-4 md:p-8 space-y-8">
          {isLoading ? (
            <DashboardSkeleton /> 
          ) : (
            <>
             
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-2xl font-bold text-white/80 uppercase tracking-tight">Dashboard</h2>
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

              <Kpi />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RevenueChart />
                <Order />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <User />
                <Traffic />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}