// src/pages/Page2.tsx
import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Container, Grid } from "@mui/material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

// require("../images/dash.png");

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 1",
    author: "Date: 1/1/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 2",
    author: "Date: 10/1/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 3",
    author: "Date: 30/1/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Session 4",
    author: "Date: 12/2/2023",
  },
];

const Session: React.FC = () => {
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
      {itemData.map((item) => (
        <Card style={{ margin: 10, maxWidth: 400 }}>
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

export default Session;
