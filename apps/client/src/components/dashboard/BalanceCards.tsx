import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Mail, Smartphone } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function BalanceCards() {
  const balances = {
    sms: {
      balance: 1245,
      limit: 5000,
      unit: 'Credits'
    },
    totalSentToday: 5678,
  };

  return (
    <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
      {/* SMS Balance */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            SMS {balances.sms.unit}
          </CardTitle>
          <Smartphone className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{balances.sms.balance.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground">
            {((balances.sms.balance / balances.sms.limit) * 100).toFixed(1)}% of your limit
          </p>
          <Progress
            value={(balances.sms.balance / balances.sms.limit) * 100}
            className="h-2 mt-2"
          />
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            Buy SMS {balances.sms.unit}
          </Button>
        </CardFooter>
      </Card>

      {/* Total Messages Sent Today */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Messages Sent Today
          </CardTitle>
          <Mail className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{balances.totalSentToday.toLocaleString()}</div>
          <p className="text-xs text-muted-foreground mt-1">
            Total SMS and OTP messages sent today
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full">
            View Reports
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}