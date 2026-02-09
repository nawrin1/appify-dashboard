'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Bell, UserCircle, Search, Menu, LogOut, Settings, User } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/redux/hook/hook';
import Sidebar from '@/components/layout/sidebar';



export default function Home() {
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();



  // Options for filters
  const dateOptions = ['Last 7 days', 'Last 30 days', 'Last 12 months'];
  const userTypeOptions = ['All Users', 'Free', 'Premium', 'Enterprise'];


  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <Sidebar />
      

    </div>
  );
}