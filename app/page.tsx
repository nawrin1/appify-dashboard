'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Bell, UserCircle, Search, Menu, LogOut, Settings, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import Sidebar from '@/components/layout/sidebar';
import Head from 'next/head';
import Header from '@/components/dashboard_elements/Header/Header';



export default function Home() {
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();



  // Options for filters
  const dateOptions = ['Last 7 days', 'Last 30 days', 'Last 12 months'];
  const userTypeOptions = ['All Users', 'Free', 'Premium', 'Enterprise'];


  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#090d16]">
      <Sidebar />
       <main className={` transition-all duration-300 w-full ${isSidebarOpen ? 'lg:pl-64' : 'lg:pl-20'}`}>
        <Header></Header>
       </main>

      

    </div>
  );
}