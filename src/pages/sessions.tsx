// src/pages/Page2.tsx
import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

interface Session {
  img: string;
  title: string;
  author: string;
}

const App: React.FC = () => {
  const [sessions, setSessions] = React.useState<Session[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setSessions(data.sessions);
      } catch (error) {
        console.error('Error fetching sessions:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Sessions</h1>
      <Grid
      container
      spacing={2}
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        margin: 10,
      }}
    >
      {sessions.map((item, index) => (
        <Card key={index} style={{ margin: 10, maxWidth: 400 }}>
          <CardMedia component="img" image={item.img} title="Session Image" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography>{item.author}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open details</Button>
          </CardActions>
        </Card>
      ))}
      </Grid>
    </div>
  );
};

export default App;
