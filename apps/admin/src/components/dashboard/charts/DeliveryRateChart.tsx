import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sampleData = [
  { date: '2023-10-01', success: 1500, failure: 100 },
  { date: '2023-10-02', success: 1200, failure: 80 },
  { date: '2023-10-03', success: 1800, failure: 120 },
  { date: '2023-10-04', success: 1600, failure: 90 },
  { date: '2023-10-05', success: 1400, failure: 70 },
  { date: '2023-10-06', success: 1700, failure: 110 },
  { date: '2023-10-07', success: 1900, failure: 130 },
];

const DeliveryRateChart = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h4 className="text-lg font-semibold mb-4">Delivery Success/Failure Rate</h4>
       <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
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
            <Bar dataKey="success" fill="#8884d8" />
            <Bar dataKey="failure" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DeliveryRateChart; 