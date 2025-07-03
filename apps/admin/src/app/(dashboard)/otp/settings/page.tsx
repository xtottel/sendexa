"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function OtpSettingsPage() {
  // Mock OTP settings data
  const otpSettings = [
    {
      client: "Acme Corp",
      expiry: 5,
      maxAttempts: 3,
      channel: "SMS",
    },
    {
      client: "Beta Solutions",
      expiry: 10,
      maxAttempts: 5,
      channel: "Email",
    },
    {
      client: "Gamma Ltd",
      expiry: 7,
      maxAttempts: 4,
      channel: "SMS",
    },
    {
      client: "Delta Ventures",
      expiry: 6,
      maxAttempts: 3,
      channel: "SMS",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="OTP Settings" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>OTP Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Client</TableCell>
                    <TableCell >Expiry (mins)</TableCell>
                    <TableCell >Max Attempts</TableCell>
                    <TableCell >Channel</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {otpSettings.map((setting, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{setting.client}</TableCell>
                      <TableCell>{setting.expiry}</TableCell>
                      <TableCell>{setting.maxAttempts}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{setting.channel}</span>
                      </TableCell>
                      <TableCell>
                        <button className="text-yellow-600 hover:underline mr-2">Edit</button>
                        <button className="text-blue-600 hover:underline">View</button>
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
