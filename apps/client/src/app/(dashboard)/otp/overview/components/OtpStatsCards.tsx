import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

const stats = [
  {
    title: "Total OTP Requests",
    value: "8,642",
    change: "+8%",
    icon: Icons.lock,
  },
  {
    title: "Verification Rate",
    value: "96.3%",
    change: "+2.1%",
    icon: Icons.check,
  },
  {
    title: "Average Response Time",
    value: "1.2s",
    change: "-0.3s",
    icon: Icons.clock,
  },
  {
    title: "Failed Attempts",
    value: "312",
    change: "-12%",
    icon: Icons.alertTriangle,
  },
]

export default function OtpStatsCards() {
  return (
    <>
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className={stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}>
                {stat.change}
              </span> from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}