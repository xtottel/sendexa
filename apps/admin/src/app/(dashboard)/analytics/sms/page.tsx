"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import LineChartOne from "@/components/charts/line/LineChartOne";
import React from "react";

export default function SmsAnalyticsPage() {
  // Mock stat summary
  const stats = [
    { label: "Total Sent", value: 12000 },
    { label: "Delivered", value: 11700 },
    { label: "Failed", value: 300 },
    { label: "Delivery Rate", value: "97.5%" },
  ];

  // Mock table data
  const rows = [
    { date: "2024-06-01", client: "Acme Corp", sent: 500, delivered: 490, failed: 10, rate: "98%" },
    { date: "2024-06-01", client: "Beta Solutions", sent: 300, delivered: 285, failed: 15, rate: "95%" },
    { date: "2024-06-01", client: "Gamma Ltd", sent: 700, delivered: 690, failed: 10, rate: "98.6%" },
    { date: "2024-06-01", client: "Delta Ventures", sent: 200, delivered: 180, failed: 20, rate: "90%" },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="SMS Delivery Stats" />
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
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Monthly SMS Trends</h4>
          <LineChartOne />
        </div>
        {/* Table */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Daily Delivery Breakdown</h4>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell >Date</TableCell>
                  <TableCell >Client</TableCell>
                  <TableCell >Sent</TableCell>
                  <TableCell >Delivered</TableCell>
                  <TableCell >Failed</TableCell>
                  <TableCell >Delivery Rate</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                    <TableCell className="font-mono text-xs text-gray-500">{row.date}</TableCell>
                    <TableCell className="font-semibold text-gray-800 dark:text-white/90">{row.client}</TableCell>
                    <TableCell>{row.sent}</TableCell>
                    <TableCell>{row.delivered}</TableCell>
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
