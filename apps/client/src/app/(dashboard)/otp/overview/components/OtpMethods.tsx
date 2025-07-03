'use client'

import { DonutChart, Card, Title } from '@tremor/react'

const data = [
  { name: 'SMS', value: 5642 },
  { name: 'Email', value: 1873 },
  { name: 'WhatsApp', value: 892 },
  { name: 'Voice', value: 235 },
]

const valueFormatter = (number: number) => `${number}`

export default function OtpMethods() {
  return (
    <Card>
      <Title>OTP Delivery Methods</Title>
      <DonutChart
        className="mt-6"
        data={data}
        category="value"
        index="name"
        colors={['blue', 'cyan', 'indigo', 'violet']}
        valueFormatter={valueFormatter}
      />
      <div className="flex justify-center mt-4 space-x-4 flex-wrap gap-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center">
            <span 
              className={`h-2 w-2 rounded-full mr-2 ${
                item.name === 'SMS' ? 'bg-blue-500' : 
                item.name === 'Email' ? 'bg-cyan-500' :
                item.name === 'WhatsApp' ? 'bg-indigo-500' : 'bg-violet-500'
              }`}
            />
            <span className="text-xs text-muted-foreground">
              {item.name}: {((item.value / (5642 + 1873 + 892 + 235)) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}