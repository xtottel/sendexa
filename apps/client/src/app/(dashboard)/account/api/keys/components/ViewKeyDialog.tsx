'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

export default function ViewKeyDialog({
  apiKey,
  children,
}: {
  apiKey: {
    id: string
    name: string
    keyPrefix: string
    permissions: string
    createdAt: string
    lastUsed?: string
    expiresAt?: string
  }
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const [showKey, setShowKey] = useState(false)

  function formatDate(dateString?: string) {
    if (!dateString) return 'Never'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
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

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
    toast.success('Copied to clipboard')
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{apiKey.name}</DialogTitle>
          <DialogDescription>
            API key details and usage information
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Key</h4>
            <div className="flex items-center justify-between bg-gray-50 rounded-md p-3">
              <span className="font-mono">
                {showKey ? 'sk_live_1234567890abcdef' : apiKey.keyPrefix}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? <Icons.eyeOff className="h-4 w-4" /> : <Icons.eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Permissions</h4>
              {getPermissionBadge(apiKey.permissions)}
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Created</h4>
              <p>{formatDate(apiKey.createdAt)}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Last Used</h4>
              <p>{formatDate(apiKey.lastUsed)}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Expires</h4>
              <p>{apiKey.expiresAt ? formatDate(apiKey.expiresAt) : 'Never'}</p>
            </div>
          </div>

          {showKey && (
            <div className="rounded-md bg-yellow-50 p-4 text-yellow-800 text-sm">
              <div className="flex">
                <Icons.alertTriangle className="h-5 w-5 flex-shrink-0 mr-2" />
                <div>
                  <h4 className="font-medium">Security Warning</h4>
                  <p className="mt-1">
                    This is a sensitive key. Do not share it or expose it in client-side code.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => copyToClipboard('sk_live_1234567890abcdef')}
            disabled={!showKey}
          >
            <Icons.copy className="mr-2 h-4 w-4" />
            Copy Key
          </Button>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}