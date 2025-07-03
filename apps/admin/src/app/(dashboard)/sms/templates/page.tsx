"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

export default function SmsTemplatesPage() {
  // Mock SMS templates data
  const templates = [
    {
      client: "Acme Corp",
      name: "OTP Message",
      content: "Your OTP is {{code}}. Do not share it with anyone.",
      status: "Active",
    },
    {
      client: "Beta Solutions",
      name: "Promo Alert",
      content: "Promo: Get 20% off this week!",
      status: "Inactive",
    },
    {
      client: "Gamma Ltd",
      name: "Verification Code",
      content: "Your verification code is {{code}}.",
      status: "Active",
    },
    {
      client: "Delta Ventures",
      name: "Welcome Message",
      content: "Welcome to Delta Ventures!",
      status: "Active",
    },
  ];

  return (
    <div>
      <PageBreadcrumb pageTitle="SMS Templates" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <Card>
          <CardHeader>
            <CardTitle>SMS Templates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-white/[0.01]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell >Client</TableCell>
                    <TableCell >Template Name</TableCell>
                    <TableCell >Content</TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {templates.map((tpl, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 dark:hover:bg-white/5 transition">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">{tpl.client}</TableCell>
                      <TableCell>{tpl.name}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        <span title={tpl.content}>{tpl.content}</span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${tpl.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                          {tpl.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <button className="text-blue-600 hover:underline mr-2">View</button>
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
