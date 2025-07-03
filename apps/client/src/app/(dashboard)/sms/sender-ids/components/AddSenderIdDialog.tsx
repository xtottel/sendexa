'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Icons } from '@/components/icons'
// Update the import path below if your use-toast file is in a different location
import { toast, useSonner } from 'sonner'

export default function AddSenderIdDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [senderId, setSenderId] = useState('')
  useSonner()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      // In a real app, you would call your API here
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast(
        `Sender ID "${senderId}" has been submitted for approval.`,
        { description: 'Success' }
      )
      setOpen(false)
      setSenderId('')
    } catch {
      toast(
        'Failed to submit Sender ID. Please try again.',
        { description: 'Error' }
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Register New Sender ID</DialogTitle>
            <DialogDescription>
              Sender IDs must be approved by your telecom provider before use.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="senderId" className="text-right">
                Sender ID
              </Label>
              <Input
                id="senderId"
                value={senderId}
                onChange={(e) => setSenderId(e.target.value)}
                placeholder="YourCompany"
                className="col-span-3"
                maxLength={11}
                required
              />
            </div>
            <div className="text-sm text-muted-foreground pl-4">
              <p>• Maximum 11 characters (alphanumeric)</p>
              <p>• Must not contain special characters</p>
              <p>• Approval may take 1-3 business days</p>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Submit for Approval
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}