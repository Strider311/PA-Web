import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

interface ImageData {
  id: number;
  name: string;
  date: string;
}

const RectangleImageList: React.FC = () => {
  const [sessionName, setSessionName] = useState<string | null>(null);
  const [sessionDate, setSessionDate] = useState<string | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/session");
        const { sessionName, sessionDate, images } = response.data;
        setSessionName(sessionName);
        setSessionDate(sessionDate);
        setImages(images);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rectangle-image-list" style={{ textAlign: "center" }}>
      <div
        className="rectangle-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "20%",
          backgroundColor: "#10673E",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "10px",
        }}
      >
        {images.slice(0, 4).map((image) => (
          <div key={image.id} onClick={() => handleImageClick(image)}>
            <img
              src={`/path/to/your/images/${image.name}`}
              alt={image.name}
              style={{ width: "100px", height: "60px", borderRadius: "5px" }}
            />
            <Button variant="text">Text</Button>
            <p>{image.name}</p>
            <p>{image.date}</p>
          </div>
        ))}
        <p>{sessionName}</p>
        <p>{sessionDate}</p>
      </div>
    </div>
  );

  function handleImageClick(image: ImageData) {
    console.log(`Clicked on image: ${image.name}`);
  }
};

export default RectangleImageList;
