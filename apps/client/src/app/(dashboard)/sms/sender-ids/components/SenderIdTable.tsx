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
import { Icons } from '@/components/icons'
import { Clock, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
//import { Toaster } from "@/components/ui/sonner"
import { toast } from 'sonner'


type SenderId = {
  id: string
  senderId: string
  status: 'approved' | 'pending' | 'rejected'
  createdAt: string
  updatedAt: string
}

const senderIds: SenderId[] = [
  {
    id: '1',
    senderId: 'ACME',
    status: 'approved',
    createdAt: '2023-05-10T08:30:00Z',
    updatedAt: '2023-05-12T14:15:00Z',
  },
  {
    id: '2',
    senderId: 'MYSHOP',
    status: 'approved',
    createdAt: '2023-04-15T10:20:00Z',
    updatedAt: '2023-04-17T09:45:00Z',
  },
  {
    id: '3',
    senderId: 'NEWBRAND',
    status: 'pending',
    createdAt: '2023-06-01T16:45:00Z',
    updatedAt: '2023-06-01T16:45:00Z',
  },
  {
    id: '4',
    senderId: 'TEST123',
    status: 'rejected',
    createdAt: '2023-03-20T11:10:00Z',
    updatedAt: '2023-03-22T13:30:00Z',
  },
]

export default function SenderIdTable() {
  // useSonner is not needed; use toast directly

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  function handleDelete() {
    // In a real app, you would call your API here
    toast(
      <>
        <div className="font-semibold">Sender ID deleted</div>
        <div className="text-sm text-muted-foreground">The sender ID has been removed from your account.</div>
      </>
    )
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Sender ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Created</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {senderIds.map((sender) => (
          <TableRow key={sender.id}>
            <TableCell className="font-medium">{sender.senderId}</TableCell>
            <TableCell>
              <Badge
                variant={
                  sender.status === 'approved'
                    ? 'default'
                    : sender.status === 'pending'
                    ? 'secondary'
                    : 'destructive'
                }
              >
                {sender.status.charAt(0).toUpperCase() + sender.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>{formatDate(sender.createdAt)}</TableCell>
            <TableCell>{formatDate(sender.updatedAt)}</TableCell>
            <TableCell className="text-right">
              {sender.status === 'approved' ? (
                <Button variant="ghost" size="sm" disabled>
                  <Check className="h-4 w-4 mr-2" />
                  Active
                </Button>
              ) : sender.status === 'pending' ? (
                <Button variant="ghost" size="sm" disabled>
                  <Clock className="h-4 w-4 mr-2" />
                  Pending
                </Button>
              ) : (
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDelete}
                  >
                    <Icons.trash className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Icons.edit className="h-4 w-4 mr-2" />
                    Resubmit
                  </Button>
                </div>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}