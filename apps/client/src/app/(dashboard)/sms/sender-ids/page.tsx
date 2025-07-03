import { Button } from '@/components/ui/button'
import AddSenderIdDialog from './components/AddSenderIdDialog'
import SenderIdTable from './components/SenderIdTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

export default function SenderIdsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Sender IDs</h1>
        <AddSenderIdDialog>
          <Button>
            <Icons.plus className="mr-2 h-4 w-4" />
            Add Sender ID
          </Button>
        </AddSenderIdDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Sender IDs</CardTitle>
        </CardHeader>
        <CardContent>
          <SenderIdTable />
        </CardContent>
      </Card>
    </div>
  )
}