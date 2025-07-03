// app/sms/send/page.tsx
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { MessageForm } from "./components/MessageForm";

export default function SendSmsPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Send SMS" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white/90 sm:text-3xl">
            Send New Message
          </h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Compose and send SMS messages to individuals or groups
          </p>
        </div>
        
        <MessageForm />
      </div>
    </div>
  );
}