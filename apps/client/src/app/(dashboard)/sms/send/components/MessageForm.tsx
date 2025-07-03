// app/sms/send/components/MessageForm.tsx
'use client';

import { useState } from 'react';
import { CsvUpload } from './CsvUpload';
import { TemplateSelector } from './TemplateSelector';
import { ScheduleOptions } from './ScheduleOptions';
import { Check, Send, Upload, Loader2,  Smartphone } from 'lucide-react';

export function MessageForm() {
  const [activeTab, setActiveTab] = useState<'manual' | 'csv'>('manual');
  const [formData, setFormData] = useState({
    recipients: '',
    message: '',
    senderId: '', // Will be required now
    scheduleDate: null as Date | null,
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sample sender IDs - replace with your actual data
  const senderIds = [
    { id: 'sendexa', name: 'Sendexa' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleScheduleChange = (date: Date | null) => {
    setFormData(prev => ({ ...prev, scheduleDate: date }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(false);
    
    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setFormData(prev => ({ ...prev, message: '', recipients: '' }));
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {success && (
        <div className="rounded-md bg-green-50 p-4 dark:bg-green-900/30">
          <div className="flex items-center text-sm text-green-800 dark:text-green-200">
            <Check className="mr-2 h-5 w-5" />
            Message sent successfully!
          </div>
        </div>
      )}

      {/* Recipient Selection Tabs */}
      <div>
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              type="button"
              onClick={() => setActiveTab('manual')}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'manual' ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              <Smartphone className="mr-2 inline h-4 w-4" />
              Manual Entry
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('csv')}
              className={`whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium ${activeTab === 'csv' ? 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              <Upload className="mr-2 inline h-4 w-4" />
              CSV Upload
            </button>
          </nav>
        </div>

        <div className="mt-4">
          {activeTab === 'manual' ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="recipients" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Numbers
                </label>
                <div className="mt-1">
                  <textarea
                    id="recipients"
                    name="recipients"
                    rows={3}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
                    placeholder="+1234567890, +1987654321"
                    value={formData.recipients}
                    onChange={handleChange}
                    required={activeTab === 'manual'}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Separate multiple numbers with commas
                </p>
              </div>
            </div>
          ) : (
            <CsvUpload onUpload={(numbers) => setFormData(prev => ({ ...prev, recipients: numbers.join(', ') }))} />
          )}
        </div>
      </div>

      {/* Template Selector */}
      <TemplateSelector onSelect={(template) => setFormData(prev => ({ ...prev, message: template }))} />

      {/* Message Composition */}
      <div className="space-y-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message Content
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{formData.message.length} / 160 characters</span>
          <span>{Math.ceil(formData.message.length / 160)} message(s)</span>
        </div>
      </div>

      {/* Sender ID and Schedule Options - Side by Side */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Sender ID */}
        <div className="space-y-4">
          <label htmlFor="senderId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Sender ID <span className="text-red-500">*</span>
          </label>
          <select
            id="senderId"
            name="senderId"
            className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
            value={formData.senderId}
            onChange={handleChange}
            required
          >
            <option value="">Select a sender ID</option>
            {senderIds.map((sender) => (
              <option key={sender.id} value={sender.id}>
                {sender.name}
              </option>
            ))}
          </select>
        </div>

        {/* Schedule Options */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Schedule <span className="text-gray-400">(Optional)</span>
          </label>
          <ScheduleOptions 
            selectedDate={formData.scheduleDate} 
            onDateChange={handleScheduleChange} 
          />
        </div>
      </div>

      {/* Form Actions */}
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end sm:space-x-3">
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  );
}