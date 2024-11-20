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

export default function Advertise() {
  return (
    <div className='container mx-auto px-6 py-8'>
      <div className='flex gap-4 items-center justify-between w-full'>
        <h3 className='text-gray-700 text-3xl font-medium'>Dashboard</h3>
        <div className='flex gap-4 items-center'>
          <Input
            type='text'
            placeholder='Search for projects'
            icon={<Search />}
            className='w-72 border-gray-300 border-solid'
          />
          <Button className='bg-sky-500 text-white p-4 flex items-center justify-center'>
            New Project +
          </Button>
        </div>
      </div>

      <div className='mt-4'>
        <div className='flex flex-wrap -mx-6'>
          <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Total Projects
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>24</div>
                <p className='text-xs text-muted-foreground'>
                  +2 since last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Active Projects
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                  <circle cx='9' cy='7' r='4' />
                  <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>15</div>
                <p className='text-xs text-muted-foreground'>
                  +1 since last week
                </p>
              </CardContent>
            </Card>
          </div>

          <div className='w-full px-6 sm:w-1/2 xl:w-1/3'>
            <Card>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  Avg. Response Time
                </CardTitle>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                </svg>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>4.2 hours</div>
                <p className='text-xs text-muted-foreground'>
                  -0.5 hours from last month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <Card>
          <CardHeader>
            <CardTitle>Recent Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Deadline</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className='font-medium'>
                    Website Redesign
                  </TableCell>
                  <TableCell>
                    <Badge variant='default'>In Progress</Badge>
                  </TableCell>
                  <TableCell>2023-11-18</TableCell>
                  <TableCell>2023-12-31</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    Mobile App Development
                  </TableCell>
                  <TableCell>
                    <Badge variant='secondary'>Pending Review</Badge>
                  </TableCell>
                  <TableCell>2023-11-15</TableCell>
                  <TableCell>2024-02-28</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>
                    E-commerce Platform
                  </TableCell>
                  <TableCell>
                    <Badge variant='destructive'>Delayed</Badge>
                  </TableCell>
                  <TableCell>2023-11-10</TableCell>
                  <TableCell>2023-12-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className='font-medium'>CRM Integration</TableCell>
                  <TableCell>
                    <Badge variant='outline'>Completed</Badge>
                  </TableCell>
                  <TableCell>2023-11-05</TableCell>
                  <TableCell>2023-11-30</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
