"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import React from "react";

export default function LogsAuditPage() {
  // Mock logs data
  const logs = [
    {
      datetime: "2024-06-01 09:00",
      user: "Alice Johnson",
      action: "Login",
      target: "Admin Portal",
      details: "Logged in from Lagos, Nigeria",
    },
    {
      datetime: "2024-06-01 09:15",
      user: "Bob Smith",
      action: "Edit",
      target: "Client: Acme Corp",
      details: "Changed SMS credits from 1000 to 2000",
    },
    {
      datetime: "2024-06-01 09:30",
      user: "Carol Lee",
      action: "Suspend",
      target: "Client: Beta Solutions",
      details: "Suspended account due to payment overdue",
    },
    {
      datetime: "2024-06-01 10:00",
      user: "David Kim",
      action: "View",
      target: "Logs",
      details: "Viewed system logs",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Logs & Audit" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Logs & Audit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01] max-w-4xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >User/Admin</TableCell>
                    <TableCell >Action</TableCell>
                    <TableCell >Target</TableCell>
                    <TableCell >Details</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{log.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{log.user}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{log.action}</span>
                      </TableCell>
                      <TableCell>{log.target}</TableCell>
                      <TableCell>{log.details}</TableCell>
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
