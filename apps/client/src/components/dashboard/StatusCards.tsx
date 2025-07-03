import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Check, X, Clock, Mail, Smartphone, BarChart2 } from 'lucide-react';

export default function StatusCards() {
  const metrics = {
    sms: {
      delivered: 2732,
      failed: 110,
      deliveryRate: 96.1,
      avgDeliveryTime: '2.8s'
    },
    email: {
      delivered: 5721,
      opened: 3245,
      clicked: 1243,
      bounced: 122,
      deliveryRate: 97.9,
      openRate: 56.7,
      clickRate: 21.7
    }
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* SMS Delivery Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            SMS Delivery Rate
          </CardTitle>
          <Smartphone className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.sms.deliveryRate}%</div>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Check className="h-3 w-3 text-green-500 mr-1" />
            <span>{metrics.sms.delivered.toLocaleString()} delivered</span>
            <span className="mx-2">•</span>
            <X className="h-3 w-3 text-red-500 mr-1" />
            <span>{metrics.sms.failed.toLocaleString()} failed</span>
          </div>
        </CardContent>
      </Card>

      {/* SMS Avg Delivery Time */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            SMS Avg Delivery
          </CardTitle>
          <Clock className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.sms.avgDeliveryTime}</div>
          <p className="text-xs text-muted-foreground">
            98% delivered under 5 seconds
          </p>
        </CardContent>
      </Card>

      {/* Email Delivery Rate */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Email Delivery Rate
          </CardTitle>
          <Mail className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.email.deliveryRate}%</div>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <Check className="h-3 w-3 text-green-500 mr-1" />
            <span>{metrics.email.delivered.toLocaleString()} delivered</span>
            <span className="mx-2">•</span>
            <X className="h-3 w-3 text-red-500 mr-1" />
            <span>{metrics.email.bounced.toLocaleString()} bounced</span>
          </div>
        </CardContent>
      </Card>

      {/* Email Engagement */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Email Engagement
          </CardTitle>
          <BarChart2 className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.email.openRate}%</div>
          <p className="text-xs text-muted-foreground">
            {metrics.email.opened.toLocaleString()} opens • {metrics.email.clickRate}% click rate
          </p>
        </CardContent>
      </Card>
    </div>
  );
}