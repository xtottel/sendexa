// app/sms/send/components/TemplateSelector.tsx
'use client';

import { useState } from 'react';

interface TemplateSelectorProps {
  onSelect: (template: string) => void;
}

const TEMPLATES = [
  {
    name: 'Appointment Reminder',
    content: 'Hello {name}, your appointment with {company} is on {date} at {time}. Reply YES to confirm or NO to reschedule.'
  },
  {
    name: 'OTP Verification',
    content: 'Your verification code is {code}. It will expire in 10 minutes.'
  },
  {
    name: 'Order Confirmation',
    content: 'Thank you for your order #{order_id}. Your items will be delivered by {date}.'
  },
];

export function TemplateSelector({ onSelect }: TemplateSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleSelect = (template: string) => {
    setSelectedTemplate(template);
    onSelect(template);
    setIsOpen(false);
  };

  return (
    <div className="relative space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Message Template
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {selectedTemplate ? 'Change Template' : 'Use Template'}
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg dark:bg-gray-800">
          <div className="max-h-60 overflow-auto py-1 text-base">
            {TEMPLATES.map((template, index) => (
              <button
                key={index}
                type="button"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                onClick={() => handleSelect(template.content)}
              >
                <div className="font-medium">{template.name}</div>
                <div className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">
                  {template.content}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTemplate && (
        <div className="rounded-md bg-blue-50 p-3 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <div className="flex">
            <div className="ml-3">
              <p>Template applied. Edit the message as needed.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}