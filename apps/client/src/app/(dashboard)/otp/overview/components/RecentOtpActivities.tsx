import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Icons } from '@/components/icons'
import { CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Card } from '@tremor/react'

const activities = [
  {
    id: '1',
    method: 'SMS',
    recipient: '+1234567890',
    status: 'Verified',
    timestamp: '2023-06-15 10:30:45',
  },
  {
    id: '2',
    method: 'Email',
    recipient: 'user@example.com',
    status: 'Verified',
    timestamp: '2023-06-15 09:15:22',
  },
  {
    id: '3',
    method: 'WhatsApp',
    recipient: '+1987654321',
    status: 'Expired',
    timestamp: '2023-06-14 16:45:10',
  },
  {
    id: '4',
    method: 'SMS',
    recipient: '+1122334455',
    status: 'Failed',
    timestamp: '2023-06-14 14:20:33',
  },
  {
    id: '5',
    method: 'Voice',
    recipient: '+1444333222',
    status: 'Verified',
    timestamp: '2023-06-13 11:05:17',
  },
]

function getMethodIcon(method: string) {
  switch (method) {
    case 'SMS':
      return <Icons.message className="h-4 w-4 mr-2" />
    case 'Email':
      return <Icons.mail className="h-4 w-4 mr-2" />
    case 'WhatsApp':
      return <Icons.messageSquare className="h-4 w-4 mr-2" />
    case 'Voice':
      return <Icons.phone className="h-4 w-4 mr-2" />
    default:
      return <Icons.lock className="h-4 w-4 mr-2" />
  }
}

export default function RecentOtpActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent OTP Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Method</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center">
                    {getMethodIcon(activity.method)}
                    {activity.method}
                  </div>
                </TableCell>
                <TableCell>{activity.recipient}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      activity.status === 'Verified'
                        ? 'default'
                        : activity.status === 'Expired'
                        ? 'secondary'
                        : 'destructive'
                    }
                  >
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">{activity.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}