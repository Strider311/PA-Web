import React from 'react';
import Chart from '../components/BarChart';
import { Grid, Typography } from '@mui/material';
import { LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'; // Import the LineChart components

const chartData = [
  { name: 'Jan', value: 100, value2: 50 }, 
  { name: 'Feb', value: 200, value2: 100 },
  { name: 'Mar', value: 150, value2: 75 },
];

const BarChart: React.FC = () => {
  return (
    <div>
      <h1>Graphs</h1>
      <Grid container spacing={3}>
      <Grid item xs={6}>
          <LineChart width={700} height={500} data={chartData}> 
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value2" stroke="#82ca9d" /> 
            <Tooltip />
            <Legend />
          </LineChart>
          <Typography variant="subtitle1" align="center" width={700} height={50}>
          % of Dry Land: This graph shows regions of the land that lack adequate moisture, which might necessitate irrigation interventions or denote areas unsuitable for planting.          </Typography>
        </Grid>
        <Grid item xs={6}>
          <LineChart width={700} height={500} data={chartData}> 
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value2" stroke="#82ca9d" /> 
            <Tooltip />
            <Legend />
          </LineChart>
          <Typography variant="subtitle1" align="center" width={700} height={50}>
            % of Unhealthy Plants :: An essential visual cue, this representation underscores areas where plants aren't thriving, potentially due to factors such as nutrient deficiencies or diseases.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chart data={chartData} />
          <Typography variant="subtitle1" align="center" width={700} height={50}>
            % of Waterlogged Areas: An essential metric for certain crops, this graph showcases zones with an overabundance of moisture, which might be detrimental for plant roots and lead to issues like root rot.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Chart data={chartData} />
          <Typography variant="subtitle1" align="center" width={700} height={50}>
            % of Pest-Infested Plants: Serving as an early warning system, this graph emphasizes areas under threat from pests, allowing farmers to take timely preventive or curative measures.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BarChart;

