'use client';

import { Transaction } from "@/types";
import { Table, TableHeader, TableRow, TableBody, TableCell } from "@/components/ui/ExaTable";
import { Check } from 'lucide-react';

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="whitespace-nowrap">
          <TableCell className="w-[120px]">Date</TableCell>
          <TableCell>Plan</TableCell>
          <TableCell className="text-right">Credits</TableCell>
          <TableCell className="text-right">Amount</TableCell>
          <TableCell>Payment Method</TableCell>
          <TableCell className="text-right">Status</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.length > 0 ? (
          transactions.map((txn) => (
            <TableRow key={txn.id} className="whitespace-nowrap">
              <TableCell className="font-medium">{txn.date}</TableCell>
              <TableCell>{txn.plan}</TableCell>
              <TableCell className="text-right">{txn.credits.toLocaleString()}</TableCell>
              <TableCell className="text-right">GH₵{txn.amount}</TableCell>
              <TableCell>{txn.paymentMethod}</TableCell>
              <TableCell className="text-right">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    txn.status === 'completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : txn.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {txn.status === 'completed' && (
                    <Check className="mr-1 h-3 w-3" />
                  )}
                  {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                </span>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={6} className="text-center py-8 text-gray-500 dark:text-gray-400">
              No transactions found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}