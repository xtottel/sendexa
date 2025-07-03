"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function RolesPage() {
  // Mock roles data
  const roles = [
    {
      name: "Super Admin",
      description: "Full access to all features and settings.",
      permissions: ["Manage Users", "Billing", "Analytics", "Settings"],
    },
    {
      name: "Support",
      description: "Can view and assist with client issues.",
      permissions: ["View Users", "View SMS", "View OTP", "Logs"],
    },
    {
      name: "Billing",
      description: "Handles all billing and credit operations.",
      permissions: ["View Billing", "Adjust Credits", "View Transactions"],
    },
    {
      name: "Read Only",
      description: "Can view all data but cannot make changes.",
      permissions: ["View Users", "View Billing", "View Analytics"],
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="Roles & Permissions" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>Roles & Permissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Role Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Permissions</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {roles.map((role, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{role.name}</TableCell>
                      <TableCell>{role.description}</TableCell>
                      <TableCell>
                        <span className="text-xs text-gray-700 dark:text-gray-300">
                          {role.permissions.join(", ")}
                        </span>
                      </TableCell>
                      <TableCell>
                        <button className="text-yellow-600 hover:underline mr-2">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
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
