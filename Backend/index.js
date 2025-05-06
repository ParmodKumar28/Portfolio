import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
const NODE_ENV = process.env.NODE_ENV || "development";

// CORS Middleware
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(cors()); // Allow all origins (for development only)

// Content Security Policy (Optional: only needed if serving frontend)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self'; worker-src 'self' blob:;"
  );
  next();
});

// Health Check
app.get("/", (req, res) => {
  res.send("🚀 YouTube API Proxy Server is running!");
});

// YouTube Data API Proxy
app.get("/api/youtube", async (req, res) => {
  const API_KEY = process.env.YOUTUBE_API_KEY?.trim();
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID?.trim();

  if (!API_KEY || !CHANNEL_ID) {
    return res.status(400).json({
      error: "Missing environment variables",
      keys: {
        YOUTUBE_API_KEY: API_KEY ? "present" : "missing",
        YOUTUBE_CHANNEL_ID: CHANNEL_ID ? "present" : "missing",
      },
    });
  }

  try {
    // Fetch channel info
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${encodeURIComponent(
      CHANNEL_ID
    )}&key=${encodeURIComponent(API_KEY)}`;
    const videoUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${encodeURIComponent(
      CHANNEL_ID
    )}&maxResults=6&order=date&type=video&key=${encodeURIComponent(API_KEY)}`;

    const channelRes = await fetch(channelUrl);
    const channelData = await channelRes.json();

    if (!channelRes.ok) {
      console.error("💥 Channel fetch error:", channelData);
      return res.status(500).json({
        error: "Channel Fetch Failed",
        message: channelData.error?.message || "Unknown error",
      });
    }

    const videoRes = await fetch(videoUrl);
    const videoData = await videoRes.json();

    if (!videoRes.ok) {
      console.error("💥 Video fetch error:", videoData);
      return res.status(500).json({
        error: "Video Fetch Failed",
        message: videoData.error?.message || "Unknown error",
      });
    }

    const response = {
      channelInfo: channelData.items?.[0] || {},
      videos: videoData.items || [],
    };

    res.json(response);
  } catch (err) {
    console.error("💥 Unexpected Error:", err.message);
    res.status(500).json({
      error: "Unexpected Server Error",
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT} (${NODE_ENV} mode)`);
});
