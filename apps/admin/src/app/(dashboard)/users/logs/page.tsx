"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function UserLogsPage() {
  // Mock activity log data
  const logs = [
    {
      datetime: "2024-06-01 09:15",
      client: "Acme Corp",
      action: "Login",
      details: "Logged in from Lagos, Nigeria",
      by: "John Doe",
    },
    {
      datetime: "2024-06-01 09:20",
      client: "Beta Solutions",
      action: "Sent SMS",
      details: "Sent 500 SMS to campaign list",
      by: "Jane Smith",
    },
    {
      datetime: "2024-06-01 09:25",
      client: "Gamma Ltd",
      action: "OTP Request",
      details: "Requested OTP for +2348011122233",
      by: "Samuel Johnson",
    },
    {
      datetime: "2024-06-01 09:30",
      client: "Delta Ventures",
      action: "Credit Adjustment",
      details: "+1000 credits (manual top-up)",
      by: "Grace Lee",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="User Activity Logs" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>User Activity Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Action</TableCell>
                    <TableCell >Details</TableCell>
                    <TableCell >Performed By</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{log.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{log.client}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                          {log.action}
                        </span>
                      </TableCell>
                      <TableCell>{log.details}</TableCell>
                      <TableCell>{log.by}</TableCell>
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
