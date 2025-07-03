import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Mail, Smartphone} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export default function RecentActivity() {
  const activities = [
    { id: '1a2b3c', type: 'SMS', destination: '+23324*****90', status: 'Delivered', time: '2 min ago' },
    { id: '4d5e6f', type: 'Email', destination: 'c***@company.com', status: 'Opened', time: '15 min ago' },
    { id: '7g8h9i', type: 'SMS', destination: '+23354*****12', status: 'Failed', time: '1 hour ago' },
    { id: '0j1k2l', type: 'Email', destination: 'u***@example.com', status: 'Bounced', time: '3 hours ago' },
    { id: '3m4n5o', type: 'SMS', destination: '+23320*****45', status: 'Delivered', time: '5 hours ago' }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Delivered':
      case 'Opened':
        return 'default';
      case 'Failed':
      case 'Bounced':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities.map((activity) => (
              <TableRow key={activity.id}>
                <TableCell>
                  <div className="flex items-center">
                    {activity.type === 'SMS' ? (
                      <Smartphone className="h-4 w-4 text-blue-600 mr-2" />
                    ) : (
                      <Mail className="h-4 w-4 text-green-600 mr-2" />
                    )}
                    {activity.type}
                  </div>
                </TableCell>
                <TableCell>{activity.destination}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(activity.status)}>
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell>{activity.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}