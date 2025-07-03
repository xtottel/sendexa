'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { toast } from 'sonner'
import EditTemplateDialog from './EditTemplateDialog'

type Template = {
  id: string
  name: string
  content: string
  createdAt: string
}

const templates: Template[] = [
  {
    id: '1',
    name: 'Welcome Message',
    content: 'Hello {name}, welcome to our service! Your account is now active.',
    createdAt: '2023-05-10T08:30:00Z',
  },
  {
    id: '2',
    name: 'OTP Verification',
    content: 'Your verification code is {code}. It expires in {minutes} minutes.',
    createdAt: '2023-04-15T10:20:00Z',
  },
  {
    id: '3',
    name: 'Password Reset',
    content: 'Click here to reset your password: {link}',
    createdAt: '2023-06-01T16:45:00Z',
  },
]

export default function TemplateTable() {
  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  function handleDelete(id: string) {
    toast(`Are you sure you want to delete template with id: ${id}?`, {
      action: {
        label: 'Delete',
        onClick: () => {
          // In a real app, you would call your API here
          toast.success(`Template with id: ${id} deleted successfully`)
        },
      },
      cancel: {
        label: 'Cancel',
        onClick: () => {
          // Optionally handle cancel action here
        },
      },
    })
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Content Preview</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {templates.map((template) => (
          <TableRow key={template.id}>
            <TableCell className="font-medium">{template.name}</TableCell>
            <TableCell className="max-w-[300px] truncate">
              {template.content}
            </TableCell>
            <TableCell>{formatDate(template.createdAt)}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <EditTemplateDialog template={template}>
                  <Button variant="ghost" size="sm">
                    <Icons.edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                </EditTemplateDialog>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleDelete(template.id)}
                >
                  <Icons.trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}