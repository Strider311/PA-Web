import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageComponent: React.FC = () => {
  const [sessionName, setSessionName] = useState<string | null>(null);
  const [imageNames, setImageNames] = useState<string[]>([]);

  useEffect(() => {
    axios.get('/api/session') 
      .then((response) => {
        const { sessionName, imageNames } = response.data;
        setSessionName(sessionName);
        setImageNames(imageNames);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Session: {sessionName}</h1>
      <div className="image-list">
        {imageNames.map((imageName, index) => (
          <div key={index} className="image-item">
            <h2>{imageName}</h2>
            <img
              src={`/path/to/your/images/${imageName}`}
              alt={imageName}
              style={{ width: '200px', height: '200px' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
