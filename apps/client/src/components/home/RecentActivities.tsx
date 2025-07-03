import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const activities = [
  {
    id: '1',
    type: 'SMS',
    recipient: '+1234567890',
    status: 'Delivered',
    timestamp: '2023-06-15 10:30:45',
  },
  {
    id: '2',
    type: 'OTP',
    recipient: '+1987654321',
    status: 'Verified',
    timestamp: '2023-06-15 09:15:22',
  },
  {
    id: '3',
    type: 'SMS',
    recipient: '+1122334455',
    status: 'Failed',
    timestamp: '2023-06-14 16:45:10',
  },
  {
    id: '4',
    type: 'OTP',
    recipient: '+1555666777',
    status: 'Expired',
    timestamp: '2023-06-14 14:20:33',
  },
  {
    id: '5',
    type: 'SMS',
    recipient: '+1444333222',
    status: 'Delivered',
    timestamp: '2023-06-13 11:05:17',
  },
]

export default function RecentActivities() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Recipient</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {activities.map((activity) => (
            <TableRow key={activity.id}>
              <TableCell className="font-medium">{activity.type}</TableCell>
              <TableCell>{activity.recipient}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    activity.status === 'Delivered' || activity.status === 'Verified'
                      ? 'default'
                      : activity.status === 'Failed'
                      ? 'destructive'
                      : 'secondary'
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
    </div>
  )
}