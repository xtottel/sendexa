'use client'

import { BarChart, Card, Title } from '@tremor/react'

const data = [
  {
    date: 'Jan',
    Successful: 689,
    Failed: 32,
  },
  {
    date: 'Feb',
    Successful: 712,
    Failed: 28,
  },
  {
    date: 'Mar',
    Successful: 834,
    Failed: 41,
  },
  {
    date: 'Apr',
    Successful: 925,
    Failed: 35,
  },
  {
    date: 'May',
    Successful: 1024,
    Failed: 48,
  },
  {
    date: 'Jun',
    Successful: 1156,
    Failed: 52,
  },
]

export default function OtpUsageChart() {
  return (
    <Card>
      <Title>OTP Requests Last 6 Months</Title>
      <BarChart
        className="mt-6 h-80"
        data={data}
        index="date"
        categories={['Successful', 'Failed']}
        colors={['green', 'red']}
        valueFormatter={(number: number) => `${number}`}
        yAxisWidth={48}
        stack={true}
      />
    </Card>
  )
}