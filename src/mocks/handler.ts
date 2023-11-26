// src/mocks/dashHandlers.ts
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/data', (req, res, ctx) => {
    return res(
      ctx.json({
        chartData: [
          [{ name: 'Jan', value: 100, value2: 50 }, 
          { name: 'Feb', value: 200, value2: 100 },
          { name: 'Mar', value: 150, value2: 75 }],
          [{ name: 'Jan', value: 100, value2: 50 }, 
          { name: 'Feb', value: 200, value2: 100 },
          { name: 'Mar', value: 150, value2: 75 }],
          [{ name: 'Jan', value: 100, value2: 50 }, 
          { name: 'Feb', value: 200, value2: 100 },
          { name: 'Mar', value: 150, value2: 75 }],
          [{ name: 'Jan', value: 100, value2: 50 }, 
          { name: 'Feb', value: 200, value2: 100 },
          { name: 'Mar', value: 150, value2: 75 }],
          
        ],
        sessions: [
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
        ],
        plantCareOverview: {
          imageUrl: './dash.png',
        },
      })
    );
  }),
];
