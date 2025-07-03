import { NextResponse } from 'next/server'
import { OtpStats } from '@/lib/types'

export async function GET() {
  const data: OtpStats = {
    total: 8642,
    verified: 8320,
    failed: 258,
    expired: 127,
    avgResponseTime: 1.2,
    deliveryMethods: {
      sms: 5642,
      email: 1873,
      whatsapp: 892,
      voice: 235,
    }
  }

  return NextResponse.json(data)
}