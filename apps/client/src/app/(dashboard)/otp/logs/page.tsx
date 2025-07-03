"use client"

import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Mail, Smartphone, Download, Search } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function OTPReportsPage() {
  // Sample OTP report data
  const otpReports = [
    {
      id: '1a2b3c',
      code: '849302',
      phoneNumber: '+15417543010',
      email: null,
      medium: 'SMS',
      status: 'Delivered',
      createdAt: '2023-06-15 09:30:22',
      verifiedAt: '2023-06-15 09:31:45'
    },
    {
      id: '4d5e6f',
      code: '573829',
      phoneNumber: null,
      email: 'user@example.com',
      medium: 'Email',
      status: 'Verified',
      createdAt: '2023-06-15 10:15:33',
      verifiedAt: '2023-06-15 10:17:12'
    },
    {
      id: '7g8h9i',
      code: '926475',
      phoneNumber: '+14845551234',
      email: null,
      medium: 'SMS',
      status: 'Failed',
      createdAt: '2023-06-15 11:05:17',
      verifiedAt: null
    },
    {
      id: '0j1k2l',
      code: '384756',
      phoneNumber: null,
      email: 'client@business.com',
      medium: 'Email',
      status: 'Expired',
      createdAt: '2023-06-14 14:22:08',
      verifiedAt: null
    },
    {
      id: '3m4n5o',
      code: '657483',
      phoneNumber: '+17185559876',
      email: null,
      medium: 'SMS',
      status: 'Verified',
      createdAt: '2023-06-14 16:45:39',
      verifiedAt: '2023-06-14 16:47:02'
    },
  ];

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'default';
      case 'Delivered':
        return 'secondary';
      case 'Failed':
        return 'destructive';
      case 'Expired':
        return 'outline';
      default:
        return 'default';
    }
  };

  return (
    <div>
      <PageBreadcrumb pageTitle="OTP Reports" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="mb-2 font-semibold text-gray-800 text-theme-xl dark:text-white/90 sm:text-2xl">
              OTP Verification History
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 sm:text-base">
              Detailed records of all OTP transactions
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search OTPs..."
                className="pl-9 sm:w-[200px] md:w-[300px]"
              />
            </div>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <Card>
          <div className="overflow-x-auto p-1">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    OTP Code
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Medium
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Created At
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Verified At
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {otpReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-medium text-gray-900 dark:text-white">
                      {report.code}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {report.medium === 'SMS' ? (
                        <span>{report.phoneNumber?.replace(/(\d{3})\d{4}(\d{3})/, '$1****$2')}</span>
                      ) : (
                        <span>
                          {report.email?.replace(/(.{2}).*@(.*)/, '$1***@$2')}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {report.medium === 'SMS' ? (
                          <>
                            <Smartphone className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                            <span>SMS</span>
                          </>
                        ) : (
                          <>
                            <Mail className="h-4 w-4 text-green-600 dark:text-green-400 mr-2" />
                            <span>Email</span>
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={getStatusVariant(report.status)}>
                        {report.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(report.createdAt)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {report.verifiedAt ? formatDate(report.verifiedAt) : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
            <span className="font-medium">24</span> results
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}