"use client";
import OverviewCards from '@/components/home/OverviewCards'
import SmsAnalytics from '@/components/home/SmsAnalytics'
import OtpStats from '@/components/home/OtpStats'
import RecentActivities from '@/components/home/RecentActivities'

export default function DashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 gap-6 mb-8">
        <OverviewCards />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <SmsAnalytics />
        </div>
        <div className="lg:col-span-1">
          <OtpStats />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <RecentActivities />
      </div>
    </>
  )
}