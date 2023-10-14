import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const dash: React.FC = () => (
  <div>
  <h1>Plant Care Overview </h1>
  <Card sx={{ maxWidth: 500, margin: 5 }}>
    <CardMedia
      sx={{ height: 500, width: 500 }}
      image={require("../images/dash.png")}
      title="Current Image"
    />
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

export default dash;
