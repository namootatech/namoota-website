import React, { useState } from 'react';
import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  User,
  Home,
  Briefcase,
  ShoppingBag,
  Database,
  MessageSquare,
  CreditCard,
  BarChart2,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useFormState } from 'react-dom';

const menuItems = [
  { href: '/app', label: 'Dashboard', icon: Home },
  { href: '/app/projects', label: 'Projects', icon: Briefcase },
  { href: '/app/marketplace', label: 'Marketplace', icon: ShoppingBag },
  { href: '/app/data-sims', label: 'Data Sims', icon: Database },
  { href: '/app/messages', label: 'Messages', icon: MessageSquare },
  { href: '/app/billing', label: 'Billing', icon: CreditCard },
  { href: '/app/reports', label: 'Reports', icon: BarChart2 },
  { href: '/app/settings', label: 'Settings', icon: Settings },
];

export default function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        className={`bg-white border-r-8 shadow-md border-sky-500 border-solid text-white py-7 px-2 flex flex-col`}
      >
        <div className='flex justify-between items-center mb-6'>
          {isSidebarOpen && (
            <Link
              href='/app'
              className='inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl'
            >
              <img className='w-54 h-10' src='/logz.png' alt='Logo' />
            </Link>
          )}
          <Button
            variant='ghost'
            size='icon'
            onClick={toggleSidebar}
            className='text-sky-800'
          >
            <Menu className='h-6 w-6' />
          </Button>
        </div>
        <nav className='flex-1'>
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className='relative group'>
                <div
                  className={`text-sky-800 flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white ${
                    !isSidebarOpen ? 'justify-center' : ''
                  }`}
                >
                  <item.icon className='h-5 w-5 mr-2' />
                  {isSidebarOpen && <span>{item.label}</span>}
                </div>
                {!isSidebarOpen && (
                  <div className='absolute left-full top-0 ml-2 px-2 py-1 bg-sky-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                    {item.label}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='flex border-b-8 shadow-md border-sky-500 justify-between items-center py-4 px-6 bg-white border-b-1 border-gray-200'>
          <div className='flex items-center'>
            <div className='relative mx-4 lg:mx-0'>
              <span className='absolute inset-y-0 left-0 pl-3 flex items-center'>
                <Search className='h-5 w-5 text-gray-500' />
              </span>
              <Input
                className='pl-10 pr-4 w-full'
                type='text'
                placeholder='Search'
              />
            </div>
          </div>

          <div className='flex items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='relative'>
                  <Bell className='h-5 w-5' />
                  <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full'>
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>New project assigned</DropdownMenuItem>
                <DropdownMenuItem>You have a new message</DropdownMenuItem>
                <DropdownMenuItem>
                  Project "XYZ" is due tomorrow
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='ghost' className='ml-4 flex items-center'>
                  <Avatar className='h-8 w-8'>
                    <AvatarImage src='/placeholder-avatar.jpg' alt='User' />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span className='ml-2'>John Doe</span>
                  <ChevronDown className='ml-2 h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <div className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-100'>
          {children}
        </div>
      </div>
    </div>
  );
}
