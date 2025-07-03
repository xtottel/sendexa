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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Icons } from '@/components/icons'
import { toast } from 'sonner'

export default function CreateTemplateDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [template, setTemplate] = useState({
    name: '',
    content: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast.success('Template created successfully', {
        description: `${template.name} has been saved.`,
      })
      
      setOpen(false)
      setTemplate({ name: '', content: '' })
    } catch {
      toast.error('Failed to create template', {
        description: 'Please try again or contact support.',
      })
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
            <DialogTitle>Create New Template</DialogTitle>
            <DialogDescription>
              Create a reusable SMS template with variables like {`{name}`} or {`{code}`}.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Template Name</Label>
              <Input
                id="name"
                value={template.name}
                onChange={(e) => setTemplate({...template, name: e.target.value})}
                placeholder="Welcome Message"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Template Content</Label>
              <Textarea
                id="content"
                value={template.content}
                onChange={(e) => setTemplate({...template, content: e.target.value})}
                placeholder="Hello {name}, your verification code is {code}."
                className="min-h-[120px]"
                required
              />
              <p className="text-sm text-muted-foreground">
                Use curly braces for variables: {`{variable}`}
              </p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
              Create Template
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}