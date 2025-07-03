"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function SmsLogsPage() {
  // Mock SMS logs data
  const smsLogs = [
    {
      datetime: "2024-06-01 10:00",
      client: "Acme Corp",
      recipient: "+2348012345678",
      message: "Your OTP is 123456.",
      status: "Delivered",
      credits: 1,
    },
    {
      datetime: "2024-06-01 10:05",
      client: "Beta Solutions",
      recipient: "+2348098765432",
      message: "Promo: Get 20% off this week!",
      status: "Failed",
      credits: 2,
    },
    {
      datetime: "2024-06-01 10:10",
      client: "Gamma Ltd",
      recipient: "+2348011122233",
      message: "Your verification code is 789012.",
      status: "Pending",
      credits: 1,
    },
    {
      datetime: "2024-06-01 10:15",
      client: "Delta Ventures",
      recipient: "+2348076543210",
      message: "Welcome to Delta Ventures!",
      status: "Delivered",
      credits: 1,
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="All SMS Logs" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>All SMS Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Recipient</TableCell>
                    <TableCell >Message</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Credits Used</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {smsLogs.map((sms, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{sms.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{sms.client}</TableCell>
                      <TableCell>{sms.recipient}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        <span title={sms.message}>{sms.message}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${sms.status === "Delivered" ? "bg-green-100 text-green-700" : sms.status === "Failed" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {sms.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="font-mono text-sm text-gray-800 dark:text-white/90">{sms.credits}</span>
                      </TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
                        <button className="text-gray-600 hover:underline">Resend</button>
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
