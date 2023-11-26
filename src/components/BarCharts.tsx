import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


interface ChartProps {
  data: any[]; // Pass your data as props
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <BarChart width={700} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#ccc" />
      <Bar dataKey="value" fill="#8884d8" />
      <Tooltip />
      <Legend />
    </BarChart>
  );
};

export default Chart;
