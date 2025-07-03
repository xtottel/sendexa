"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function FailedOtpPage() {
  // Mock failed OTP verifications data
  const failedOtps = [
    {
      datetime: "2024-06-01 15:00",
      client: "Acme Corp",
      recipient: "+2348012345678",
      reason: "Code expired",
    },
    {
      datetime: "2024-06-01 15:05",
      client: "Beta Solutions",
      recipient: "+2348098765432",
      reason: "Incorrect code",
    },
    {
      datetime: "2024-06-01 15:10",
      client: "Gamma Ltd",
      recipient: "+2348011122233",
      reason: "Max attempts reached",
    },
    {
      datetime: "2024-06-01 15:15",
      client: "Delta Ventures",
      recipient: "+2348076543210",
      reason: "Code expired",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Failed Verifications" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Failed OTP Verifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Recipient</TableCell>
                    <TableCell >Reason</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {failedOtps.map((otp, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{otp.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{otp.client}</TableCell>
                      <TableCell>{otp.recipient}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-700 font-medium">{otp.reason}</span>
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
