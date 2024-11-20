import React from 'react';
import { Bell, ChevronDown, Menu, Search, User } from 'lucide-react';
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

export default function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <aside
        className={`bg-white border-r-8  shadow-md border-sky-500 border-solid text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <nav>
          <Link
            href='/app'
            class='inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl'
            aria-label='logo'
          >
            <img className='w-54 h-10' src='/logz.png' />
          </Link>
          <a
            href='/app'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Dashboard
          </a>
          <Link
            href='/app/projects'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Projects
          </Link>
          <Link
            href='/app/marketplace'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Marketplace
          </Link>
          <Link
            href='/app/data-sims'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Data Sims
          </Link>
          <Link
            href='/app/messages'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Messages
          </Link>
          <Link
            href='/app/billing'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Billing
          </Link>
          <Link
            href='/app/reports'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Reports
          </Link>
          <Link
            href='/app/settings'
            className='text-sky-800 block py-2.5 px-4 rounded transition duration-200 hover:bg-sky-700 hover:text-white'
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Header */}
        <header className='flex border-b-8  shadow-md border-sky-500 justify-between items-center py-4 px-6 bg-white border-b-1 border-gray-200'>
          <div className='flex items-center'>
            <button
              onClick={toggleSidebar}
              className='text-gray-500 focus:outline-none md:hidden'
            >
              <Menu className='h-6 w-6' />
            </button>
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
