// app/sms/reports/page.tsx
'use client';

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { useState, useEffect } from 'react';
import { Search, Filter, Download, ChevronDown, ChevronUp, Check, X, Clock, BarChart2 } from 'lucide-react';
import { Calendar as CalendarIcon } from 'lucide-react';
import { format, subDays, startOfDay, endOfDay } from 'date-fns';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SmsReport {
  id: string;
  date: Date;
  recipients: number;
  message: string;
  status: 'delivered' | 'failed' | 'pending';
  senderId: string;
  cost: number;
}

export default function SmsReportsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<{ start?: Date; end?: Date }>({});
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [timePeriod, setTimePeriod] = useState<string>('all');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Sample data - replace with actual API calls
  const reports: SmsReport[] = [
    {
      id: '1',
      date: new Date('2023-06-15T09:30:00'),
      recipients: 125,
      message: 'Your appointment is confirmed for tomorrow at 2pm',
      status: 'delivered',
      senderId: 'notifications',
      cost: 12.50
    },
    {
      id: '2',
      date: new Date('2023-06-14T14:15:00'),
      recipients: 89,
      message: 'Your verification code is 456789',
      status: 'failed',
      senderId: 'support',
      cost: 8.90
    },
    {
      id: '3',
      date: new Date('2023-06-13T11:20:00'),
      recipients: 42,
      message: 'Thank you for your order #12345',
      status: 'pending',
      senderId: 'marketing',
      cost: 4.20
    },
    {
      id: '4',
      date: new Date('2023-06-12T16:45:00'),
      recipients: 210,
      message: 'Special offer: 20% off your next purchase',
      status: 'delivered',
      senderId: 'marketing',
      cost: 21.00
    },
    {
      id: '5',
      date: new Date(),
      recipients: 75,
      message: 'Today\'s special: 30% off all items',
      status: 'delivered',
      senderId: 'marketing',
      cost: 7.50
    },
    {
      id: '6',
      date: subDays(new Date(), 1),
      recipients: 63,
      message: 'Your account has been credited',
      status: 'delivered',
      senderId: 'notifications',
      cost: 6.30
    },
  ];

  // Apply time period filter
  useEffect(() => {
    const today = new Date();
    switch (timePeriod) {
      case 'today':
        setDateRange({
          start: startOfDay(today),
          end: endOfDay(today)
        });
        break;
      case '7days':
        setDateRange({
          start: startOfDay(subDays(today, 7)),
          end: endOfDay(today)
        });
        break;
      case '30days':
        setDateRange({
          start: startOfDay(subDays(today, 30)),
          end: endOfDay(today)
        });
        break;
      case 'all':
        setDateRange({});
        break;
      default:
        break;
    }
  }, [timePeriod]);

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.message.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         report.senderId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = (!dateRange.start || report.date >= dateRange.start) && 
                       (!dateRange.end || report.date <= dateRange.end);
    const matchesStatus = statusFilter === 'all' || report.status === statusFilter;
    
    return matchesSearch && matchesDate && matchesStatus;
  });

  const statusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <Check className="h-4 w-4 text-green-500" />;
      case 'failed': return <X className="h-4 w-4 text-red-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      default: return null;
    }
  };

  // Calculate stats based on current filters
  const totalMessages = filteredReports.length;
  const deliveredCount = filteredReports.filter(r => r.status === 'delivered').length;
  const failedCount = filteredReports.filter(r => r.status === 'failed').length;
  const pendingCount = filteredReports.filter(r => r.status === 'pending').length;
  const totalCost = filteredReports.reduce((sum, report) => sum + report.cost, 0);

  return (
    <div>
      <PageBreadcrumb pageTitle="SMS Reports" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-4 py-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-5 sm:py-7 xl:px-10 xl:py-12">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
            SMS Reports
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            View message history, delivery status, and analytics
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Select value={timePeriod} onValueChange={setTimePeriod}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          
          {timePeriod === 'custom' && (
            <div className="flex flex-wrap gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[150px] justify-start text-left font-normal sm:w-[180px]",
                      !dateRange.start && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.start ? format(dateRange.start, "PPP") : <span>Start date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateRange.start}
                    onSelect={(date) => setDateRange({...dateRange, start: date})}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-[150px] justify-start text-left font-normal sm:w-[180px]",
                      !dateRange.end && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange.end ? format(dateRange.end, "PPP") : <span>End date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateRange.end}
                    onSelect={(date) => setDateRange({...dateRange, end: date})}
                    initialFocus
                    disabled={(date) => dateRange.start ? date < dateRange.start : false}
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
        </div>

        {/* Summary Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <BarChart2 className="h-6 w-6 text-blue-500" />
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Total Messages</h3>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{totalMessages}</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <Check className="h-6 w-6 text-green-500" />
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Delivered</h3>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{deliveredCount}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {totalMessages > 0 ? `${Math.round((deliveredCount / totalMessages) * 100)}% success rate` : 'N/A'}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <X className="h-6 w-6 text-red-500" />
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Failed</h3>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{failedCount}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {totalMessages > 0 ? `${Math.round((failedCount / totalMessages) * 100)}% failure rate` : 'N/A'}
            </p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center">
              <Clock className="h-6 w-6 text-yellow-500" />
              <h3 className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">Pending</h3>
            </div>
            <p className="mt-2 text-2xl font-semibold text-gray-900 dark:text-white">{pendingCount}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              Total cost: ${totalCost.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Search */}
            <div>
              <label htmlFor="search" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="search"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label htmlFor="status" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  className="block w-full appearance-none rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white sm:text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="delivered">Delivered</option>
                  <option value="failed">Failed</option>
                  <option value="pending">Pending</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reports Table */}
        <div className="overflow-x-auto">
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                    {isMobile ? 'Date' : 'Date & Time'}
                  </th>
                  <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                    Message
                  </th>
                  {!isMobile && (
                    <>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                        Recipients
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:px-6">
                        Cost
                      </th>
                    </>
                  )}
                  <th scope="col" className="relative px-4 py-3 sm:px-6">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                {filteredReports.length > 0 ? (
                  filteredReports.map((report) => (
                    <>
                      <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                          {isMobile ? format(report.date, 'MMM d') : report.date.toLocaleString()}
                        </td>
                        <td className="px-4 py-4 sm:px-6">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {report.message.length > (isMobile ? 20 : 50)
                              ? `${report.message.substring(0, isMobile ? 20 : 50)}...`
                              : report.message}
                          </div>
                          {isMobile && (
                            <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                              {statusIcon(report.status)}
                              <span className="ml-1 capitalize">{report.status}</span>
                              <span className="mx-2">•</span>
                              <span>{report.recipients} recipients</span>
                            </div>
                          )}
                        </td>
                        {!isMobile && (
                          <>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                              {report.recipients}
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                              <div className="flex items-center">
                                {statusIcon(report.status)}
                                <span className="ml-2 capitalize">{report.status}</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                              ${report.cost.toFixed(2)}
                            </td>
                          </>
                        )}
                        <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium sm:px-6">
                          <button
                            onClick={() => setExpandedRow(expandedRow === report.id ? null : report.id)}
                            className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            {expandedRow === report.id ? (
                              <ChevronUp className="h-5 w-5" />
                            ) : (
                              <ChevronDown className="h-5 w-5" />
                            )}
                          </button>
                        </td>
                      </tr>
                      {expandedRow === report.id && (
                        <tr className="bg-gray-50 dark:bg-gray-700/30">
                          <td colSpan={isMobile ? 3 : 6} className="px-4 py-4 sm:px-6">
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Full Message</h4>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{report.message}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-white">Details</h4>
                                <div className="mt-1 grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
                                  <div>
                                    <span className="font-medium">Sender ID:</span> {report.senderId}
                                  </div>
                                  <div>
                                    <span className="font-medium">Cost per SMS:</span> ${(report.cost / report.recipients).toFixed(4)}
                                  </div>
                                  <div>
                                    <span className="font-medium">Date Sent:</span> {report.date.toLocaleString()}
                                  </div>
                                  <div>
                                    <span className="font-medium">Status:</span> <span className="capitalize">{report.status}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))
                ) : (
                  <tr>
                    <td colSpan={isMobile ? 3 : 6} className="px-4 py-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                      No reports found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            <Download className="mr-2 h-4 w-4" />
            Export to CSV
          </button>
        </div>
      </div>
    </div>
  );
}