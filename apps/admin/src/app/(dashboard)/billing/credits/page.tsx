"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function CreditAdjustmentsPage() {
  // Mock credit adjustments data
  const adjustments = [
    {
      datetime: "2024-06-01 18:00",
      client: "Acme Corp",
      amount: 2000,
      reason: "Manual top-up",
      by: "Admin A",
    },
    {
      datetime: "2024-06-01 18:10",
      client: "Beta Solutions",
      amount: -500,
      reason: "Correction",
      by: "Admin B",
    },
    {
      datetime: "2024-06-01 18:20",
      client: "Gamma Ltd",
      amount: 1000,
      reason: "Promo bonus",
      by: "Admin A",
    },
    {
      datetime: "2024-06-01 18:30",
      client: "Delta Ventures",
      amount: -100,
      reason: "Chargeback",
      by: "Admin C",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Credit Adjustments" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Credit Adjustments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Amount (₦)</TableCell>
                    <TableCell >Reason</TableCell>
                    <TableCell >Performed By</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adjustments.map((adj, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{adj.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{adj.client}</TableCell>
                      <TableCell>
                        <span className={`font-mono text-sm ${adj.amount < 0 ? "text-red-600" : "text-green-700"}`}>{adj.amount < 0 ? '-' : ''}₦{Math.abs(adj.amount).toLocaleString()}</span>
                      </TableCell>
                      <TableCell>{adj.reason}</TableCell>
                      <TableCell>{adj.by}</TableCell>
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
