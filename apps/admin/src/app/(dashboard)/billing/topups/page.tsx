"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function TopupsPage() {
  // Mock top-ups data
  const topups = [
    {
      datetime: "2024-06-01 17:00",
      client: "Acme Corp",
      amount: 10000,
      method: "Bank Transfer",
      status: "Successful",
    },
    {
      datetime: "2024-06-01 17:10",
      client: "Beta Solutions",
      amount: 5000,
      method: "Card",
      status: "Pending",
    },
    {
      datetime: "2024-06-01 17:20",
      client: "Gamma Ltd",
      amount: 2000,
      method: "Bank Transfer",
      status: "Failed",
    },
    {
      datetime: "2024-06-01 17:30",
      client: "Delta Ventures",
      amount: 15000,
      method: "Card",
      status: "Successful",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Top-ups" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Top-ups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Amount (₦)</TableCell>
                    <TableCell >Method</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topups.map((topup, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{topup.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{topup.client}</TableCell>
                      <TableCell className="font-mono text-sm text-gray-800 dark:text-white/90">₦{topup.amount.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{topup.method}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${topup.status === "Successful" ? "bg-green-100 text-green-700" : topup.status === "Failed" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {topup.status}
                        </span>
                      </TableCell>
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
