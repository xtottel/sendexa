import { NextResponse } from 'next/server'
import { ApiKey } from '@/lib/types'

// Mock database
let apiKeys: ApiKey[] = [
  {
    id: '1',
    name: 'Production Server',
    keyPrefix: 'sk_live_*****_a1b2c3',
    permissions: 'admin',
    createdAt: new Date('2023-05-10').toISOString(),
    lastUsed: new Date('2023-06-15').toISOString(),
  },
  {
    id: '2',
    name: 'Development',
    keyPrefix: 'sk_test_*****_x7y8z9',
    permissions: 'write',
    createdAt: new Date('2023-04-15').toISOString(),
    expiresAt: new Date('2023-12-31').toISOString(),
  },
]

export async function GET() {
  return NextResponse.json(apiKeys)
}

export async function POST(request: Request) {
  const { name, permissions } = await request.json()

  if (!name || !permissions) {
    return NextResponse.json(
      { error: 'Name and permissions are required' },
      { status: 400 }
    )
  }

  // In a real app, you would generate a secure API key
  const keyPrefix = `sk_${permissions === 'admin' ? 'live' : 'test'}_*****_${Math.random().toString(36).substring(2, 6)}`

  const newKey: ApiKey = {
    id: (apiKeys.length + 1).toString(),
    name,
    keyPrefix,
    permissions,
    createdAt: new Date().toISOString(),
  }

  apiKeys = [...apiKeys, newKey]

  return NextResponse.json({
    ...newKey,
    // In a real app, this would only be returned once
    fullKey: `sk_${permissions === 'admin' ? 'live' : 'test'}_${Math.random().toString(36).substring(2, 18)}_${Math.random().toString(36).substring(2, 6)}`
  }, { status: 201 })
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  
  apiKeys = apiKeys.filter(key => key.id !== id)
  
  return NextResponse.json({ success: true })
}