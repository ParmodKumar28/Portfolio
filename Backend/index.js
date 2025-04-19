import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self'; worker-src 'self' blob:;"
  );
  next();
});


// Health check
app.get('/', (req, res) => {
  res.send('🚀 YouTube API Proxy Server is running!');
});

// YouTube Data API endpoint
app.get('/api/youtube', async (req, res) => {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    if(process.env.NODE_ENV === 'development') {
      console.warn('⚠️ Missing environment variables: YOUTUBE_API_KEY or YOUTUBE_CHANNEL_ID');
    }
    return res.status(400).send('Missing YouTube API key or Channel ID in environment variables.');
  }

  try {
    // Fetch channel info
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    if (!channelRes.ok) throw new Error(`Channel fetch failed: ${channelRes.statusText}`);
    const channelData = await channelRes.json();

    // Fetch recent videos
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`
    );
    if (!videoRes.ok) throw new Error(`Videos fetch failed: ${videoRes.statusText}`);
    const videoData = await videoRes.json();

    const data = {
      channelInfo: channelData.items[0],
      videos: videoData.items,
    };

    res.json(data);
  } catch (error) {
    console.error('💥 YouTube API error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} (${NODE_ENV} mode)`);
});
