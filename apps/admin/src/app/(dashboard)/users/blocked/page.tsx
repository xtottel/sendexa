"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function BlockedAccountsPage() {
  // Mock blocked accounts data
  const blocked = [
    {
      business: "Beta Solutions",
      contact: "Jane Smith",
      email: "jane@betasolutions.com",
      phone: "+2348098765432",
      blockedDate: "2024-05-28",
      reason: "Payment overdue",
    },
    {
      business: "Omega Tech",
      contact: "Victor Uche",
      email: "victor@omegatech.com",
      phone: "+2348012349999",
      blockedDate: "2024-05-30",
      reason: "Abuse of service",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Blocked Accounts" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Blocked Client Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Business Name</TableCell>
                    <TableCell >Contact</TableCell>
                    <TableCell >Email</TableCell>
                    <TableCell >Phone</TableCell>
                    <TableCell >Blocked Date</TableCell>
                    <TableCell >Reason</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {blocked.map((client, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{client.business}</TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>
                        <span className="text-blue-700 dark:text-blue-400 underline underline-offset-2 cursor-pointer hover:text-blue-900">{client.email}</span>
                      </TableCell>
                      <TableCell>{client.phone}</TableCell>
                      <TableCell className="font-mono text-xs text-gray-500">{client.blockedDate}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-700 font-medium">
                          {client.reason}
                        </span>
                      </TableCell>
                      <TableCell>
                        <button className="text-green-600 hover:underline mr-2">Unblock</button>
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
