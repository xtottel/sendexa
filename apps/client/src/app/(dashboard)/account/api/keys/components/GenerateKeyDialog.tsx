'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { toast } from 'sonner'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function GenerateKeyDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [permissions, setPermissions] = useState('read')
  const [newKey, setNewKey] = useState('')
  const [showKey, setShowKey] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Generate a mock API key (in real app, this would come from your backend)
      const mockKey = `sk_live_${Math.random().toString(36).substring(2, 18)}_${Math.random().toString(36).substring(2, 10)}`
      setNewKey(mockKey)
      
      toast.success('API key generated successfully')
    } catch {
      toast.error('Failed to generate API key', {
        description: 'Please try again or contact support.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  function handleClose() {
    setOpen(false)
    setName('')
    setPermissions('read')
    setNewKey('')
    setShowKey(false)
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(newKey)
    toast.success('API key copied to clipboard', {
      description: 'Make sure to store it securely.',
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        {!newKey ? (
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Generate New API Key</DialogTitle>
              <DialogDescription>
                Create a new key to authenticate API requests.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Key Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Production Server"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Permissions</Label>
                <Select value={permissions} onValueChange={setPermissions}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select permissions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="read">Read Only</SelectItem>
                    <SelectItem value="write">Read & Write</SelectItem>
                    <SelectItem value="admin">Full Access</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                Generate Key
              </Button>
            </div>
          </form>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Your New API Key</DialogTitle>
              <DialogDescription>
                Make sure to copy your API key now. You won&apos;t be able to see it again!
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="relative">
                <Input
                  value={showKey ? newKey : '•'.repeat(newKey.length)}
                  readOnly
                  className="font-mono"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={() => setShowKey(!showKey)}
                  type="button"
                >
                  {showKey ? <Icons.eyeOff className="h-4 w-4" /> : <Icons.eye className="h-4 w-4" />}
                </Button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Permissions: {permissions === 'read' ? 'Read Only' : permissions === 'write' ? 'Read & Write' : 'Full Access'}
                </div>
                <Button variant="outline" size="sm" onClick={copyToClipboard}>
                  <Icons.copy className="mr-2 h-4 w-4" />
                  Copy
                </Button>
              </div>
            </div>
            <div className="rounded-md bg-yellow-50 p-4 text-yellow-800 text-sm">
              <div className="flex">
                <Icons.alertTriangle className="h-5 w-5 flex-shrink-0 mr-2" />
                <div>
                  <h4 className="font-medium">Important Security Notice</h4>
                  <p className="mt-1">
                    Store this key securely. Anyone with this key can access your account.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={handleClose}>Done</Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}