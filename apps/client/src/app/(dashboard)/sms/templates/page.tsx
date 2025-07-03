"use client";
import { Button } from '@/components/ui/button'
import CreateTemplateDialog from './components/CreateTemplateDialog'
import TemplateTable from './components/TemplateTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/icons'

export default function SmsTemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">SMS Templates</h1>
        <CreateTemplateDialog>
          <Button>
            <Icons.plus className="mr-2 h-4 w-4" />
            New Template
          </Button>
        </CreateTemplateDialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <TemplateTable />
        </CardContent>
      </Card>
    </div>
  )
}