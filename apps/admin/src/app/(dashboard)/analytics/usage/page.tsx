"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import LineChartOne from "@/components/charts/line/LineChartOne";
import React from "react";

export default function PlatformUsagePage() {
  // Mock stat summary
  const stats = [
    { label: "Total Clients", value: 120 },
    { label: "Active Clients", value: 98 },
    { label: "Total SMS", value: 50000 },
    { label: "Total OTPs", value: 20000 },
  ];

  // Mock table data
  const rows = [
    { date: "2024-06-01", active: 80, sms: 2000, otps: 800, peak: "14:00" },
    { date: "2024-06-02", active: 90, sms: 2200, otps: 900, peak: "13:00" },
    { date: "2024-06-03", active: 85, sms: 2100, otps: 850, peak: "15:00" },
    { date: "2024-06-04", active: 98, sms: 2500, otps: 950, peak: "12:00" },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Platform Usage" />
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
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Platform Activity Trends</h4>
          <LineChartOne />
        </div>
        {/* Table */}
        <div>
          <h4 className="mb-4 text-lg font-semibold text-gray-800 dark:text-white/90">Daily Platform Usage</h4>
          <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell >Date</TableCell>
                  <TableCell >Active Clients</TableCell>
                  <TableCell >SMS Sent</TableCell>
                  <TableCell >OTPs Sent</TableCell>
                  <TableCell >Peak Hour</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, idx) => (
                  <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                    <TableCell className="font-mono text-xs text-gray-500">{row.date}</TableCell>
                    <TableCell>{row.active}</TableCell>
                    <TableCell>{row.sms}</TableCell>
                    <TableCell>{row.otps}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700 font-semibold">{row.peak}</span>
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
