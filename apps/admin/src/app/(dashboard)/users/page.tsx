"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Mail,
  Phone,
  User,
  Building2,
  Zap,
  CheckCircle,
  AlertCircle,
  MoreVertical,
  Eye,
  Plus,
  Search,
  RefreshCw,
  Shield,
  CreditCard,
  ArrowUpDown
} from "lucide-react";
import React from "react";

export default function UsersPage() {
  // Enhanced client user data
  const clients = [
    {
      id: 1,
      business: "Acme Corp",
      contact: "John Doe",
      email: "john@acme.com",
      phone: "+2348012345678",
      status: "active",
      plan: "Pro",
      credits: 1200,
      lastActive: "2 hours ago",
      signupDate: "15 Jan 2023"
    },
    {
      id: 2,
      business: "Beta Solutions",
      contact: "Jane Smith",
      email: "jane@betasolutions.com",
      phone: "+2348098765432",
      status: "suspended",
      plan: "Starter",
      credits: 0,
      lastActive: "5 days ago",
      signupDate: "22 Feb 2023"
    },
    {
      id: 3,
      business: "Gamma Ltd",
      contact: "Samuel Johnson",
      email: "samuel@gammaltd.com",
      phone: "+2348011122233",
      status: "active",
      plan: "Enterprise",
      credits: 50000,
      lastActive: "30 minutes ago",
      signupDate: "5 Mar 2023"
    },
    {
      id: 4,
      business: "Delta Ventures",
      contact: "Grace Lee",
      email: "grace@deltaventures.com",
      phone: "+2348076543210",
      status: "active",
      plan: "Pro",
      credits: 350,
      lastActive: "1 hour ago",
      signupDate: "10 Apr 2023"
    },
    {
      id: 5,
      business: "Epsilon Tech",
      contact: "Michael Brown",
      email: "michael@epsilont.com",
      phone: "+2348055512345",
      status: "pending",
      plan: "Trial",
      credits: 100,
      lastActive: "Never",
      signupDate: "Yesterday"
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default" className="gap-1"><CheckCircle className="h-3 w-3" /> Active</Badge>;
      case "suspended":
        return <Badge variant="destructive" className="gap-1"><AlertCircle className="h-3 w-3" /> Suspended</Badge>;
      case "pending":
        return <Badge variant="secondary" className="gap-1"><RefreshCw className="h-3 w-3" /> Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case "Enterprise":
        return <Badge variant="default" className="gap-1"><Shield className="h-3 w-3" /> Enterprise</Badge>;
      case "Pro":
        return <Badge variant="default" className="gap-1"><Zap className="h-3 w-3" /> Pro</Badge>;
      case "Starter":
        return <Badge variant="secondary" className="gap-1">Starter</Badge>;
      case "Trial":
        return <Badge variant="outline" className="gap-1">Trial</Badge>;
      default:
        return <Badge>{plan}</Badge>;
    }
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Client Management" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        {/* Header with search and actions */}
        <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">Client Accounts</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage all registered client accounts</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search clients..."
                className="pl-9 w-[200px] sm:w-[250px]"
              />
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Client
            </Button>
          </div>
        </div>

        {/* Client Table */}
        <Card>
          <CardHeader className="border-b border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center">
              <CardTitle>All Clients</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Refresh
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Sort
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell  className="w-[200px]">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        Business
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Contact
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        Email
                      </div>
                    </TableCell>
                    <TableCell >
                      <div className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        Phone
                      </div>
                    </TableCell>
                    <TableCell >Status</TableCell>
                    <TableCell >Plan</TableCell>
                    <TableCell >
                      <div className="flex items-center gap-1">
                        <CreditCard className="h-4 w-4" />
                        Credits
                      </div>
                    </TableCell>
                    <TableCell >Last Active</TableCell>
                    <TableCell >Actions</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clients.map((client) => (
                    <TableRow key={client.id} className="hover:bg-gray-50 dark:hover:bg-white/5">
                      <TableCell className="font-semibold text-gray-800 dark:text-white/90">
                        {client.business}
                      </TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>
                        <a 
                          href={`mailto:${client.email}`} 
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                        >
                          <Mail className="h-4 w-4" />
                          {client.email}
                        </a>
                      </TableCell>
                      <TableCell>
                        <a 
                          href={`tel:${client.phone}`} 
                          className="hover:underline flex items-center gap-1"
                        >
                          <Phone className="h-4 w-4" />
                          {client.phone}
                        </a>
                      </TableCell>
                      <TableCell>{getStatusBadge(client.status)}</TableCell>
                      <TableCell>{getPlanBadge(client.plan)}</TableCell>
                      <TableCell>
                        <span className={`font-mono text-sm flex items-center gap-1 ${
                          client.credits === 0 ? "text-red-600" : "text-gray-800 dark:text-white/90"
                        }`}>
                          {client.credits.toLocaleString()}
                        </span>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                        {client.lastActive}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Showing 1 to {clients.length} of {clients.length} clients
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}