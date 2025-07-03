// app/sms/send/components/CsvUpload.tsx
'use client';

import { useCallback, useState } from 'react';

interface CsvUploadProps {
  onUpload: (numbers: string[]) => void;
}

export function CsvUpload({ onUpload }: CsvUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileChange = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const numbers = await parseCsv(file);
    onUpload(numbers);
  }, [onUpload]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (!file) return;

    setFileName(file.name);
    const numbers = await parseCsv(file);
    onUpload(numbers);
  };

  const parseCsv = async (file: File): Promise<string[]> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        // Simple CSV parsing - would need enhancement for production
        const numbers = content
          .split('\n')
          .flatMap(line => line.split(','))
          .map(num => num.trim())
          .filter(num => num.length > 0);
        resolve(numbers);
      };
      reader.readAsText(file);
    });
  };

  return (
    <div 
      className={`mt-1 flex justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6 ${isDragging ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-600'}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="space-y-1 text-center">
        <svg
          className={`mx-auto h-12 w-12 ${isDragging ? 'text-blue-500 dark:text-blue-400' : 'text-gray-400'}`}
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="flex text-sm text-gray-600 dark:text-gray-400">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none hover:text-blue-500 dark:bg-gray-900 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <span>Upload a file</span>
            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".csv" onChange={handleFileChange} />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">CSV file with phone numbers in the first column</p>
        {fileName && (
          <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
            Selected file: {fileName}
          </p>
        )}
      </div>
    </div>
  );
}