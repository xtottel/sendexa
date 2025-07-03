"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function TransactionsPage() {
  // Mock transactions data
  const transactions = [
    {
      datetime: "2024-06-01 16:00",
      client: "Acme Corp",
      type: "Top-up",
      amount: 10000,
      status: "Successful",
      reference: "TXN123456",
    },
    {
      datetime: "2024-06-01 16:10",
      client: "Beta Solutions",
      type: "Purchase",
      amount: 5000,
      status: "Pending",
      reference: "TXN123457",
    },
    {
      datetime: "2024-06-01 16:20",
      client: "Gamma Ltd",
      type: "Adjustment",
      amount: 2000,
      status: "Failed",
      reference: "TXN123458",
    },
    {
      datetime: "2024-06-01 16:30",
      client: "Delta Ventures",
      type: "Top-up",
      amount: 15000,
      status: "Successful",
      reference: "TXN123459",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="All Transactions" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Type</TableCell>
                    <TableCell >Amount (₦)</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Reference</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((txn, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{txn.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{txn.client}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{txn.type}</span>
                      </TableCell>
                      <TableCell className="font-mono text-sm text-gray-800 dark:text-white/90">₦{txn.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${txn.status === "Successful" ? "bg-green-100 text-green-700" : txn.status === "Failed" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {txn.status}
                        </span>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-gray-500">{txn.reference}</TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
                        <button className="text-gray-600 hover:underline">Download</button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
