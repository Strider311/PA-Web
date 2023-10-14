import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ChartProps {
  data: any[]; // Pass your data as props
}

const LineChartComponent: React.FC<ChartProps> = ({ data }) => {
  return (
    <LineChart width={700} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default LineChartComponent;
