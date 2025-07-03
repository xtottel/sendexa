export interface SmsStats {
  total: number
  delivered: number
  failed: number
  lastMonthComparison: number
}

export interface OtpStats {
  total: number
  verified: number
  failed: number
  expired: number
  avgResponseTime: number
}

export interface Activity {
  id: string
  type: 'SMS' | 'OTP'
  recipient: string
  status: 'Delivered' | 'Failed' | 'Verified' | 'Expired'
  timestamp: string
}


export type SenderIdStatus = 'approved' | 'pending' | 'rejected'

export interface SenderId {
  id: string
  senderId: string
  status: SenderIdStatus
  createdAt: string
  updatedAt: string
}

export interface Template {
  id: string
  name: string
  content: string
  createdAt: string
}

export interface ApiKey {
  id: string
  name: string
  keyPrefix: string
  permissions: 'read' | 'write' | 'admin'
  createdAt: string
  lastUsed?: string
  expiresAt?: string
}

export interface OtpActivity {
  id: string
  method: 'SMS' | 'Email' | 'WhatsApp' | 'Voice'
  recipient: string
  status: 'Verified' | 'Expired' | 'Failed'
  timestamp: string
}

export interface OtpStats {
  total: number
  verified: number
  failed: number
  expired: number
  avgResponseTime: number
  deliveryMethods: {
    sms: number
    email: number
    whatsapp: number
    voice: number
  }
}

export interface ContactGroup {
  id: string;
  name: string;
  contactCount: number;
}

export interface Contact {
  id: string;
  phoneNumber: string;
  name: string;
  email: string;
  birthDate: string;
  company: string;
}

export type DropdownAction = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
  variant?: 'default' | 'destructive';
};