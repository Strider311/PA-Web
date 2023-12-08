// src/pages/Page2.tsx
import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import { Button } from "@mui/material";
import { Link, Route, Router } from "react-router-dom";
import DetailsPage from "./details";

interface Session {
  sessionName: string;
  dateCreated: string;
  noOfImages: number;
  id: string;
}

const Sessions: React.FC = () => {
  const [sessions, setSessions] = React.useState<Session[]>([]);

  const fetchData = React.useCallback(() => {
    try {
      const response = fetch("http://localhost:5115/api/sessions")
        .then((response) => response.json())
        .then((data) => setSessions(data));
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  }, []);

  React.useEffect(() => {
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
        {sessions
          ? sessions.map((item, index) => {
              return (
                <Card key={index} style={{ margin: 10, maxWidth: 400 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.sessionName}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Number of images: {item.noOfImages}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Date created: {item.dateCreated}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" href={`/details/${item.id}`}>
                      Open Details
                    </Button>
                  </CardActions>
                </Card>
              );
            })
          : "No sessions"}
      </Grid>
    </div>
    // </div>
  );
};

export default Sessions;
