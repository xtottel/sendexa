import OtpStatsCards from './components/OtpStatsCards'
import OtpUsageChart from './components/OtpUsageChart'
import OtpMethods from './components/OtpMethods'
import RecentOtpActivities from './components/RecentOtpActivities'

export default function OtpOverviewPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">OTP Overview</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <OtpStatsCards />
      </div>
      
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OtpUsageChart />
        </div>
        <div className="lg:col-span-1">
          <OtpMethods />
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className="grid grid-cols-1 gap-6">
        <RecentOtpActivities />
      </div>
    </div>
  )
}