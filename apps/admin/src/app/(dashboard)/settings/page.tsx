"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import React from "react";

export default function SystemSettingsPage() {
  // Mock settings data
  const settings = [
    { key: "Platform Name", value: "Sendexa Team" },
    { key: "Support Email", value: "support@sendexa.com" },
    { key: "Default Country", value: "Nigeria" },
    { key: "Timezone", value: "Africa/Lagos" },
    { key: "SMS Sender Name", value: "Sendexa" },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="System Settings" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>System Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01] max-w-2xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Setting</TableCell>
                    <TableCell >Value</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {settings.map((setting, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{setting.key}</TableCell>
                      <TableCell>{setting.value}</TableCell>
                      <TableCell>
                        <button className="text-yellow-600 hover:underline">Edit</button>
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
