import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware to handle CORS (allow frontend to access API)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('YouTube API Proxy Server is running!');
} );

app.get('/api/youtube', async (req, res) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    return res.status(400).send('Missing YouTube API key or Channel ID in environment variables.');
  }

  try {
    // Fetch channel info
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    const channelData = await channelRes.json();

    // Fetch videos
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`
    );
    const videoData = await videoRes.json();

    // Prepare data to return
    const data = {
      channelInfo: channelData.items[0],
      videos: videoData.items,
    };

    // Return the fresh data
    res.json(data);
  } catch (error) {
    console.error('YouTube API error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
