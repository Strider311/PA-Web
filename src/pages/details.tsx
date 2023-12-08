import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";

interface Metrics {
  index: string;
  healthy_percent: number;
  unhealthy_percent: number;
  id: string;
}

interface Details {
  id: string;
  is_processed: boolean;
  is_analyzed: boolean;
  image_name: string;
  image_rgb_path: string;
  metrics: Metrics[];
}

type ImageContentProps = {
  metrics: Metrics[];
  rgbImageId: string;
};

const ImageContent: React.FC<ImageContentProps> = (props) => {
  const [ndviImage, setNdviImage] = React.useState<string>();
  const [rgbImage, setRgbImage] = React.useState<string>();

  const fetchImages = React.useCallback((id: string) => {
    try {
      const endpoint = `http://localhost:5115/api/image/analyzed/${id}`;
      const response = fetch(endpoint).then((response) =>
        response.blob().then((blob) => {
          setNdviImage(URL.createObjectURL(blob));
          console.log("blob", blob);
        })
      );
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  }, []);

  const fetchRgbImage = React.useCallback((id: string) => {
    const endpoint = `http://localhost:5115/api/image/${id}`;
    const response = fetch(endpoint).then((response) =>
      response.blob().then((blob) => {
        setRgbImage(URL.createObjectURL(blob));
        console.log("blob", blob);
      })
    );
  }, []);

  React.useEffect(() => {
    fetchImages(props.metrics[0].id);
    fetchRgbImage(props.rgbImageId);
  }, []);

  const metrics = props.metrics;
  return (
    <div>
      {metrics
        ? metrics.map((item, index) => {
            return (
              <div key={index}>
                <CardMedia>
                  <img src={rgbImage} width={400} />
                  <img src={ndviImage} />
                </CardMedia>
                <CardContent>
                  <Typography>
                    Healthy: {(item.healthy_percent * 100).toFixed(2)} %
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography>
                    Unhealthy: {(item.unhealthy_percent * 100).toFixed(2)} %
                  </Typography>
                </CardContent>
              </div>
            );
          })
        : "no metrics"}
    </div>
  );
};

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const [imageDetails, setDetails] = React.useState<Details[]>([]);

  const fetchData = React.useCallback(() => {
    try {
      const endPoint = `http://localhost:5115/api/sessions/images/${id}`;
      const response = fetch(endPoint)
        .then((response) => response.json())
        .then((data) => setDetails(data));
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Images</h1>
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
        {imageDetails
          ? imageDetails.map((item, index) => {
              return (
                <Card key={index} style={{ margin: 10, maxWidth: 400 }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.image_name}
                    </Typography>
                  </CardContent>

                  {/* <CardMedia image={imageUrls[index]} /> */}
                  <ImageContent
                    key={index}
                    metrics={item.metrics}
                    rgbImageId={item.id}
                  ></ImageContent>
                </Card>
              );
            })
          : "No sessions"}
      </Grid>
    </div>
  );
};

export default DetailsPage;
