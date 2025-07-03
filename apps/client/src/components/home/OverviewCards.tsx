import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Lock, CheckCheck, Clock } from 'lucide-react'

const stats = [
  {
    title: "Total SMS Sent",
    value: "12,345",
    change: "+12%",
    icon: Mail,
  },
  {
    title: "OTP Requests",
    value: "8,642",
    change: "+8%",
    icon: Lock,
  },
  {
    title: "Delivery Rate",
    value: "98.5%",
    change: "+0.5%",
    icon: CheckCheck,
  },
  {
    title: "Avg Response Time",
    value: "1.2s",
    change: "-0.3s",
    icon: Clock,
  },
]

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
    </div>
  )
}