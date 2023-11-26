import * as React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

interface PlantCareOverview {
  imageUrl: string;
}

const Dash: React.FC = () => {
  const [plantCareOverview, setPlantCareOverview] = React.useState<PlantCareOverview | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setPlantCareOverview(data.plantCareOverview);
      } catch (error) {
        console.error('Error fetching plant care overview:', error);
      }
    };    

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h1">Plant Care Overview</Typography>
      <Card sx={{ maxWidth: 500, margin: 5 }}>
        {plantCareOverview && (
          <CardMedia
            sx={{ height: 500, width: 500 }}
            image={`./images/${plantCareOverview.imageUrl}`}
            title="Current Image"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Latest Image
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">NDVI</Button>
          <Button size="small">NDWI</Button>
          <Button size="small">NDRI</Button>
          <Button size="small">MSAVI2</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Dash;
