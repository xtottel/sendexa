// app/sms/send/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Send SMS | Sendexa',
  description: 'Compose and send SMS messages to your contacts',
};

export default function SendSmsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}