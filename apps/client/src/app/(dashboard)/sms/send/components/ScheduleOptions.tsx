// app/sms/send/components/ScheduleOptions.tsx
'use client';

import { useState } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';

interface ScheduleOptionsProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

export function ScheduleOptions({ selectedDate, onDateChange }: ScheduleOptionsProps) {
  const [isScheduled, setIsScheduled] = useState(false);
  // const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('12:00');

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <input
          id="schedule"
          name="schedule"
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-800"
          checked={isScheduled}
          onChange={(e) => setIsScheduled(e.target.checked)}
        />
        <label htmlFor="schedule" className="ml-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          Schedule for later
        </label>
      </div>

      {isScheduled && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Date Picker */}
          <div>
            <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !Date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate ?? undefined}
                  onSelect={(date: Date | undefined) => onDateChange(date ?? null)}
                  initialFocus
                  disabled={(date: Date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Picker */}
          <div>
            <label htmlFor="scheduleTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="time"
                id="scheduleTime"
                name="scheduleTime"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required={isScheduled}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}