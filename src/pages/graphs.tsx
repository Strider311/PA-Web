import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from 'recharts';

const Graphs: React.FC = () => {
  const [chartData, setChartData] = useState<Array<Array<{ name: string; value: number; value2: number }>>>([]);
  const [chartDescriptions, setChartDescriptions] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setChartData(data.chartData);
        setChartDescriptions([
          '% of Dry Land: This graph shows regions of the land that lack adequate moisture, which might necessitate irrigation interventions or denote areas unsuitable for planting.',
          '% of Unhealthy Plants: An essential visual cue, this representation underscores areas where plants aren\'t thriving, potentially due to factors such as nutrient deficiencies or diseases.',
          '% of Waterlogged Areas: An essential metric for certain crops, this graph showcases zones with an overabundance of moisture, which might be detrimental for plant roots and lead to issues like root rot.',
          '% of Pest-Infested Plants: Serving as an early warning system, this graph emphasizes areas under threat from pests, allowing farmers to take timely preventive or curative measures.',
        ]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderCharts = () => {
    return chartData.map((data, index) => {
      const ChartComponent =
      index === 0 || index === 1 ? (
        <LineChart width={700} height={500} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
        </LineChart>
      ) : (
          <BarChart width={700} height={500} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid stroke="#ccc" />
            <Bar dataKey="value2" fill="#82ca9d" />
            <Tooltip />
            <Legend />
          </BarChart>
        );

      return (
        <Grid item xs={6} key={index}>
          {ChartComponent}
          <Typography variant="subtitle1" align="center" width={700} height={50}>
            {chartDescriptions[index]}
          </Typography>
        </Grid>
      );
    });
  };

  return (
    <div>
      <h1>Graphs</h1>
      <Grid container spacing={3}>
        {renderCharts()}
      </Grid>
    </div>
  );
};

export default Graphs;
