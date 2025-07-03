import { NextResponse } from 'next/server'
import { OtpActivity } from '@/lib/types'

export async function GET() {
  const data: OtpActivity[] = [
    {
      id: '1',
      method: 'SMS',
      recipient: '+1234567890',
      status: 'Verified',
      timestamp: '2023-06-15T10:30:45Z',
    },
    {
      id: '2',
      method: 'Email',
      recipient: 'user@example.com',
      status: 'Verified',
      timestamp: '2023-06-15T09:15:22Z',
    },
    {
      id: '3',
      method: 'WhatsApp',
      recipient: '+1987654321',
      status: 'Expired',
      timestamp: '2023-06-14T16:45:10Z',
    },
    {
      id: '4',
      method: 'SMS',
      recipient: '+1122334455',
      status: 'Failed',
      timestamp: '2023-06-14T14:20:33Z',
    },
    {
      id: '5',
      method: 'Voice',
      recipient: '+1444333222',
      status: 'Verified',
      timestamp: '2023-06-13T11:05:17Z',
    },
  ]

  return NextResponse.json(data)
}