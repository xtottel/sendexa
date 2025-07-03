import { Button } from '@/components/ui/button'
import GenerateKeyDialog from './components/GenerateKeyDialog'
import ApiKeyTable from './components/ApiKeyTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">API Keys</h1>
        <GenerateKeyDialog>
          <Button>
            <Icons.key className="mr-2 h-4 w-4" />
            Generate New Key
          </Button>
        </GenerateKeyDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your API Keys</CardTitle>
        </CardHeader>
        <CardContent>
          <ApiKeyTable />
        </CardContent>
      </Card>
    </div>
  )
}