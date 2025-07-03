"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import LineChartOne from "@/components/charts/line/LineChartOne";
import { Table, TableHeader, TableBody, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, CheckCircle, MessageSquare, Users, Server, Clock, PieChart, AlertCircle, AlertTriangle, Info, MoreVertical, TrendingDown, TrendingUp, RefreshCw } from "lucide-react";
import React from "react";
import { Icons } from "@/components/icons";

export default function AdminPage() {
  // Enhanced stats with trends
  const stats = [
    { 
      label: "Total SMS Sent", 
      value: "12,340", 
      trend: "up", 
      change: "12%", 
      icon: <MessageSquare className="h-5 w-5 text-blue-500" /> 
    },
    { 
      label: "Total OTPs", 
      value: "4,567", 
      trend: "down", 
      change: "3%", 
      icon: <Lock className="h-5 w-5 text-green-500" /> 
    },
    { 
      label: "Delivery Rate", 
      value: "98.2%", 
      trend: "up", 
      change: "0.5%", 
      icon: <CheckCircle className="h-5 w-5 text-emerald-500" /> 
    },
    { 
      label: "Active Users", 
      value: "1,234", 
      trend: "up", 
      change: "8%", 
      icon: <Users className="h-5 w-5 text-purple-500" /> 
    },
    { 
      label: "API Requests", 
      value: "24,890", 
      trend: "up", 
      change: "15%", 
      icon: <Server className="h-5 w-5 text-orange-500" /> 
    },
    { 
      label: "Avg Response Time", 
      value: "142ms", 
      trend: "down", 
      change: "22%", 
      icon: <Clock className="h-5 w-5 text-amber-500" /> 
    },
  ];

  // Enhanced recent activity with more details
  const recentActivity = [
    { 
      id: "1",
      type: "SMS", 
      to: "+2348012345678", 
      status: "delivered", 
      time: "2 min ago",
      length: "160 chars",
      cost: "2.5 credits"
    },
    { 
      id: "2",
      type: "OTP", 
      to: "+2348098765432", 
      status: "failed", 
      time: "5 min ago",
      length: "6 digits",
      cost: "1 credit"
    },
    { 
      id: "3",
      type: "SMS", 
      to: "+2348011122233", 
      status: "pending", 
      time: "10 min ago",
      length: "320 chars",
      cost: "5 credits"
    },
    { 
      id: "4",
      type: "OTP", 
      to: "+2348076543210", 
      status: "delivered", 
      time: "15 min ago",
      length: "6 digits",
      cost: "1 credit"
    },
    { 
      id: "5",
      type: "Bulk SMS", 
      to: "5,231 recipients", 
      status: "processing", 
      time: "25 min ago",
      length: "145 chars",
      cost: "10,462 credits"
    },
  ];

  // System alerts
  const systemAlerts = [
    {
      id: "1",
      severity: "high",
      message: "Unusual spike in failed deliveries from region +234",
      time: "30 min ago"
    },
    {
      id: "2",
      severity: "medium",
      message: "Scheduled maintenance in 2 hours",
      time: "1 hour ago"
    },
    {
      id: "3",
      severity: "low",
      message: "New feature update available",
      time: "3 hours ago"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge variant="default">Delivered</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "processing":
        return <Badge variant="secondary">Processing</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="default">Low</Badge>;
      default:
        return <Badge>{severity}</Badge>;
    }
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="Super Admin Dashboard" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        {/* Welcome header with quick actions */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90">Welcome back, Admin</h1>
            <p className="text-gray-500 dark:text-gray-400">Here&apos;s what&apos;s happening with Sendexa today</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button>
              <Icons.plus className="mr-2 h-4 w-4" />
              New Campaign
            </Button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  {stat.label}
                </CardTitle>
                <div>{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-800 dark:text-white/90">{stat.value}</div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className={`text-xs flex items-center ${
                  stat.trend === "up" ? "text-green-500" : "text-red-500"
                }`}>
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {stat.change} from yesterday
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
          {/* Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Monthly SMS & OTP Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <LineChartOne />
            </CardContent>
          </Card>

          {/* Delivery Status Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Delivery Status Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-64">
              <div className="text-center">
                <PieChart className="h-16 w-16 mx-auto text-gray-400" />
                <p className="mt-2 text-gray-500">Delivery status pie chart will be displayed here</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Alerts Section */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Activity Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white/90">
                Recent Activity
                <span className="ml-2 text-sm font-normal text-gray-500">Last 50 transactions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-800">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableCell >Type</TableCell>
                      <TableCell >Recipient</TableCell>
                      <TableCell >Status</TableCell>
                      <TableCell >Details</TableCell>
                      <TableCell >Time</TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentActivity.map((item) => (
                      <TableRow key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <TableCell className="font-medium">{item.type}</TableCell>
                        <TableCell className="font-mono text-sm">{item.to}</TableCell>
                        <TableCell>{getStatusBadge(item.status)}</TableCell>
                        <TableCell className="text-xs text-gray-500">
                          {item.length} • {item.cost}
                        </TableCell>
                        <TableCell className="text-sm text-gray-500">{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost" size="sm">
                View All Activity
              </Button>
            </CardFooter>
          </Card>

          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white/90">
                System Alerts
                <span className="ml-2 text-sm font-normal text-gray-500">Last 24 hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                    <div className="mt-1">
                      {alert.severity === "high" ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : alert.severity === "medium" ? (
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                      ) : (
                        <Info className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {getSeverityBadge(alert.severity)}
                        <span className="text-sm text-gray-500">{alert.time}</span>
                      </div>
                      <p className="mt-1 text-sm">{alert.message}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost" size="sm">
                View All Alerts
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}