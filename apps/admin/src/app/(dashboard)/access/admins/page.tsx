"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function AdminUsersPage() {
  // Mock admin users data
  const admins = [
    {
      name: "Alice Johnson",
      email: "alice@sendexa.com",
      role: "Super Admin",
      status: "Active",
      lastLogin: "2024-06-01 09:00",
    },
    {
      name: "Bob Smith",
      email: "bob@sendexa.com",
      role: "Support",
      status: "Active",
      lastLogin: "2024-06-01 10:30",
    },
    {
      name: "Carol Lee",
      email: "carol@sendexa.com",
      role: "Billing",
      status: "Suspended",
      lastLogin: "2024-05-30 16:00",
    },
    {
      name: "David Kim",
      email: "david@sendexa.com",
      role: "Support",
      status: "Active",
      lastLogin: "2024-06-01 08:45",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Admin Users" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Login</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {admins.map((admin, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{admin.name}</TableCell>
                      <TableCell>{admin.email}</TableCell>
                      <TableCell>
                        <span className="px-2 py-1 rounded text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium">{admin.role}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${admin.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{admin.status}</span>
                      </TableCell>
                      <TableCell className="font-mono text-xs text-gray-500">{admin.lastLogin}</TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
                        <button className="text-yellow-600 hover:underline mr-2">Edit</button>
                        <button className="text-red-600 hover:underline">{admin.status === "Active" ? "Suspend" : "Activate"}</button>
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
