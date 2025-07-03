"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function SenderIdRequestsPage() {
  // Mock sender ID requests data
  const senderIdRequests = [
    {
      datetime: "2024-06-01 12:00",
      client: "Acme Corp",
      requestedId: "ACMECORP",
      status: "Approved",
    },
    {
      datetime: "2024-06-01 12:10",
      client: "Beta Solutions",
      requestedId: "BETASOL",
      status: "Pending",
    },
    {
      datetime: "2024-06-01 12:20",
      client: "Gamma Ltd",
      requestedId: "GAMMA",
      status: "Rejected",
    },
    {
      datetime: "2024-06-01 12:30",
      client: "Delta Ventures",
      requestedId: "DELTAV",
      status: "Pending",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Sender ID Requests" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Sender ID Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Date/Time</TableCell>
                    <TableCell >Client</TableCell>
                    <TableCell >Requested ID</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {senderIdRequests.map((req, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-mono text-xs text-gray-500">{req.datetime}</TableCell>
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{req.client}</TableCell>
                      <TableCell>{req.requestedId}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${req.status === "Approved" ? "bg-green-100 text-green-700" : req.status === "Rejected" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>
                          {req.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
                        {req.status === "Pending" && <>
                          <button className="text-green-600 hover:underline mr-2">Approve</button>
                          <button className="text-red-600 hover:underline">Reject</button>
                        </>}
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
