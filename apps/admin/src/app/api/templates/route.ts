import { NextResponse } from 'next/server'
import { Template } from '@/lib/types'

// Mock database
let templates: Template[] = [
  {
    id: '1',
    name: 'Welcome Message',
    content: 'Hello {name}, welcome to our service! Your account is now active.',
    createdAt: new Date('2023-05-10').toISOString(),
  },
  {
    id: '2',
    name: 'OTP Verification',
    content: 'Your verification code is {code}. It expires in {minutes} minutes.',
    createdAt: new Date('2023-04-15').toISOString(),
  },
]

export async function GET() {
  return NextResponse.json(templates)
}

export async function POST(request: Request) {
  const { name, content } = await request.json()

  if (!name || !content) {
    return NextResponse.json(
      { error: 'Name and content are required' },
      { status: 400 }
    )
  }

  const newTemplate: Template = {
    id: (templates.length + 1).toString(),
    name,
    content,
    createdAt: new Date().toISOString(),
  }

  templates = [...templates, newTemplate]

  return NextResponse.json(newTemplate, { status: 201 })
}

export async function PUT(request: Request) {
  const { id, name, content } = await request.json()

  templates = templates.map(template => 
    template.id === id ? { ...template, name, content } : template
  )

  return NextResponse.json({ success: true })
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  
  templates = templates.filter(template => template.id !== id)
  
  return NextResponse.json({ success: true })
}