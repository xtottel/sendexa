"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import LineChartOne from "@/components/charts/line/LineChartOne";
import React from "react";

export default function OtpAnalyticsPage() {
  // Mock stat summary
  const stats = [
    { label: "Total OTPs", value: 8000 },
    { label: "Verified", value: 7600 },
    { label: "Failed", value: 400 },
    { label: "Success Rate", value: "95%" },
  ];

  // Mock table data
  const rows = [
    { date: "2024-06-01", client: "Acme Corp", sent: 200, verified: 195, failed: 5, rate: "97.5%" },
    { date: "2024-06-01", client: "Beta Solutions", sent: 150, verified: 140, failed: 10, rate: "93.3%" },
    { date: "2024-06-01", client: "Gamma Ltd", sent: 300, verified: 285, failed: 15, rate: "95%" },
    { date: "2024-06-01", client: "Delta Ventures", sent: 100, verified: 90, failed: 10, rate: "90%" },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="OTP Stats" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        {/* Stat Summary */}
        <div className="grid grid-cols-2 gap-6 mb-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader>
                <CardTitle className="text-base text-gray-500 dark:text-gray-400 font-normal">{stat.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold text-gray-800 dark:text-white/90">{stat.value}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Chart */}
        <div className="mb-10">
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Monthly OTP Trends</h4>
          <LineChartOne />
        </div>
        {/* Table */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Daily OTP Breakdown</h4>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Client</TableCell>
                  <TableCell>Sent</TableCell>
                  <TableCell>Verified</TableCell>
                  <TableCell>Failed</TableCell>
                  <TableCell>Success Rate</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                    <TableCell className="font-mono text-xs text-gray-500">{row.date}</TableCell>
                    <TableCell className="font-semibold text-gray-800 dark:text-white/90">{row.client}</TableCell>
                    <TableCell>{row.sent}</TableCell>
                    <TableCell>{row.verified}</TableCell>
                    <TableCell>{row.failed}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${parseFloat(row.rate) > 95 ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>{row.rate}</span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
