import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sampleData = [
  { date: '2023-10-01', sms: 4000, otp: 2400 },
  { date: '2023-10-02', sms: 3000, otp: 1398 },
  { date: '2023-10-03', sms: 2000, otp: 9800 },
  { date: '2023-10-04', sms: 2780, otp: 3908 },
  { date: '2023-10-05', sms: 1890, otp: 4800 },
  { date: '2023-10-06', sms: 2390, otp: 3800 },
  { date: '2023-10-07', sms: 3490, otp: 4300 },
];

const SmsVolumeChart = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h4 className="text-lg font-semibold mb-4">SMS and OTP Volume Over Time</h4>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
            data={sampleData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sms" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="otp" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SmsVolumeChart; 