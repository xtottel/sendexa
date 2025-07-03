"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function PendingSmsPage() {
  // Mock pending SMS data
  const pendingSms = [
    {
      datetime: "2024-06-01 11:00",
      client: "Acme Corp",
      recipient: "+2348012345678",
      message: "Scheduled maintenance alert.",
      scheduled: "2024-06-01 12:00",
    },
    {
      datetime: "2024-06-01 11:05",
      client: "Beta Solutions",
      recipient: "+2348098765432",
      message: "Promo: New features launching soon!",
      scheduled: "2024-06-01 13:00",
    },
    {
      datetime: "2024-06-01 11:10",
      client: "Gamma Ltd",
      recipient: "+2348011122233",
      message: "Your account will be reviewed today.",
      scheduled: "2024-06-01 14:00",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Pending SMS" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Pending SMS</CardTitle>
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
                    <TableCell >Scheduled Time</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingSms.map((sms, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{sms.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{sms.client}</TableCell>
                      <TableCell>{sms.recipient}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        <span title={sms.message}>{sms.message}</span>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-gray-500">{sms.scheduled}</TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
                        <button className="text-red-600 hover:underline">Cancel</button>
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
