'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { toast } from 'sonner'
import ViewKeyDialog from './ViewKeyDialog'

type ApiKey = {
  id: string
  name: string
  keyPrefix: string
  permissions: string
  createdAt: string
  lastUsed?: string
  expiresAt?: string
}

const apiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production Server',
    keyPrefix: 'sk_live_*****_a1b2c3',
    permissions: 'admin',
    createdAt: '2023-05-10T08:30:00Z',
    lastUsed: '2023-06-15T14:22:00Z',
  },
  {
    id: '2',
    name: 'Development',
    keyPrefix: 'sk_test_*****_x7y8z9',
    permissions: 'write',
    createdAt: '2023-04-15T10:20:00Z',
    expiresAt: '2023-12-31T23:59:59Z',
  },
  {
    id: '3',
    name: 'Read Only Analytics',
    keyPrefix: 'sk_test_*****_m4n5o6',
    permissions: 'read',
    createdAt: '2023-06-01T16:45:00Z',
  },
]

export default function ApiKeyTable() {
  function formatDate(dateString?: string) {
    if (!dateString) return 'Never'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  function handleRevoke() {
    toast('Are you sure you want to revoke this API key?', {
      description: 'Any applications using this key will stop working.',
      action: {
        label: 'Revoke',
        onClick: () => {
          // In a real app, you would call your API here
          toast.success('API key revoked successfully')
        },
      },
      cancel: {
        label: 'Cancel',
        onClick: () => {},
      },
    })
  }

  function getPermissionBadge(permission: string) {
    switch (permission) {
      case 'admin':
        return <Badge variant="destructive">Full Access</Badge>
      case 'write':
        return <Badge variant="default">Read & Write</Badge>
      default:
        return <Badge variant="secondary">Read Only</Badge>
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Key</TableHead>
          <TableHead>Permissions</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Last Used</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {apiKeys.map((key) => (
          <TableRow key={key.id}>
            <TableCell className="font-medium">{key.name}</TableCell>
            <TableCell className="font-mono">{key.keyPrefix}</TableCell>
            <TableCell>{getPermissionBadge(key.permissions)}</TableCell>
            <TableCell>{formatDate(key.createdAt)}</TableCell>
            <TableCell>{formatDate(key.lastUsed)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <ViewKeyDialog apiKey={key}>
                  <Button variant="ghost" size="sm">
                    <Icons.eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </ViewKeyDialog>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRevoke}
                >
                  <Icons.trash className="h-4 w-4 mr-2" />
                  Revoke
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}