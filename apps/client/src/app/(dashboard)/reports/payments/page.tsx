'use client';

import { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { TransactionTable } from "./components/TransactionTable";
import { Transaction } from "@/types";

export default function PaymentHistoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending' | 'failed'>('all');

  // Sample transaction data in GH₵
  const transactions: Transaction[] = [
    { id: '1', date: '2023-06-15', plan: 'Business', credits: 5000, amount: 450, status: 'completed', paymentMethod: 'XtoPay Mobile Money' },
    { id: '2', date: '2023-06-10', plan: 'Starter', credits: 1000, amount: 100, status: 'completed', paymentMethod: 'XtoPay Bank' },
    { id: '3', date: '2023-06-05', plan: 'Enterprise', credits: 10000, amount: 800, status: 'pending', paymentMethod: 'XtoPay Mobile Money' },
    { id: '4', date: '2023-05-28', plan: 'Business', credits: 5000, amount: 450, status: 'completed', paymentMethod: 'XtoPay Bank' },
    { id: '5', date: '2023-05-20', plan: 'Starter', credits: 1000, amount: 100, status: 'failed', paymentMethod: 'XtoPay Mobile Money' },
  ];

  // Filter transactions based on search and filter
  const filteredTransactions = transactions.filter(txn => {
    const matchesSearch = txn.plan.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         txn.paymentMethod.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || txn.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <PageBreadcrumb pageTitle="Payment History" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="space-y-6">
          {/* Header and Filters */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold">Payment History</h1>
              <p className="text-gray-500 dark:text-gray-400">
                View all your SMS credit purchase transactions
              </p>
            </div>
            
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Filter className="h-4 w-4" />
                    {filter === 'all' ? 'All' : 
                     filter === 'completed' ? 'Completed' :
                     filter === 'pending' ? 'Pending' : 'Failed'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setFilter('all')}>
                    All
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter('completed')}>
                    Completed
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter('pending')}>
                    Pending
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setFilter('failed')}>
                    Failed
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="min-w-[800px] md:min-w-full">
              <TransactionTable transactions={filteredTransactions} />
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
              <span className="font-medium">{filteredTransactions.length}</span> results
            </p>
            <div className="flex gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="outline">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}