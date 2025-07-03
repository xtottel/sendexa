"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function OtpLogsPage() {
  // Mock OTP logs data
  const otpLogs = [
    {
      datetime: "2024-06-01 14:00",
      client: "Acme Corp",
      recipient: "+2348012345678",
      code: "123456",
      status: "Verified",
      channel: "SMS",
    },
    {
      datetime: "2024-06-01 14:05",
      client: "Beta Solutions",
      recipient: "+2348098765432",
      code: "654321",
      status: "Failed",
      channel: "Email",
    },
    {
      datetime: "2024-06-01 14:10",
      client: "Gamma Ltd",
      recipient: "+2348011122233",
      code: "789012",
      status: "Pending",
      channel: "SMS",
    },
    {
      datetime: "2024-06-01 14:15",
      client: "Delta Ventures",
      recipient: "+2348076543210",
      code: "345678",
      status: "Verified",
      channel: "SMS",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="All OTP Logs" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>All OTP Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Recipient</TableCell>
                    <TableCell >OTP Code</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Channel</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {otpLogs.map((otp, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{otp.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{otp.client}</TableCell>
                      <TableCell>{otp.recipient}</TableCell>
                      <TableCell className="font-mono text-sm text-gray-800 dark:text-white/90">{otp.code}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${otp.status === "Verified" ? "bg-green-100 text-green-700" : otp.status === "Failed" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {otp.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">
                          {otp.channel}
                        </span>
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
