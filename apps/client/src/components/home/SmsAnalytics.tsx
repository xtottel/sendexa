'use client'

import { AreaChart, Card, Title } from '@tremor/react'
//import { useData } from '@/lib/hooks/useData'

const chartdata = [
  { date: 'Jan', 'SMS Sent': 2890, 'Failed': 120 },
  { date: 'Feb', 'SMS Sent': 2756, 'Failed': 98 },
  { date: 'Mar', 'SMS Sent': 3322, 'Failed': 156 },
  { date: 'Apr', 'SMS Sent': 3470, 'Failed': 180 },
  { date: 'May', 'SMS Sent': 3475, 'Failed': 125 },
  { date: 'Jun', 'SMS Sent': 3129, 'Failed': 164 },
]

export default function SmsAnalytics() {
  return (
    <Card>
      <Title>SMS Analytics</Title>
      <AreaChart
        className="mt-6 h-80"
        data={chartdata}
        index="date"
        categories={['SMS Sent', 'Failed']}
        colors={['blue', 'red']}
        valueFormatter={(number: number) => `${number}`}
        yAxisWidth={60}
      />
    </Card>
  )
}