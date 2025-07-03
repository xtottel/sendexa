import { DonutChart, Card, Title } from '@tremor/react'

const otpData = [
  { name: 'Successful', value: 8642 },
  { name: 'Failed', value: 258 },
  { name: 'Expired', value: 127 },
]

const valueFormatter = (number: number) => `${number}`

export default function OtpStats() {
  return (
    <Card>
      <Title>OTP Request Stats</Title>
      <DonutChart
        className="mt-6"
        data={otpData}
        category="value"
        index="name"
        colors={['green', 'red', 'orange']}
        valueFormatter={valueFormatter}
      />
      <div className="flex justify-center mt-4 space-x-4">
        {otpData.map((item) => (
          <div key={item.name} className="flex items-center">
            <span 
              className={`h-2 w-2 rounded-full mr-2 ${
                item.name === 'Successful' ? 'bg-green-500' : 
                item.name === 'Failed' ? 'bg-red-500' : 'bg-orange-500'
              }`}
            />
            <span className="text-xs text-muted-foreground">
              {item.name}: {((item.value / (8642 + 258 + 127)) * 100).toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}