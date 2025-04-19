import { useState, useEffect } from 'react';
import './Youtube.css';

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const [channelInfo, setChannelInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  const CACHE_KEY = import.meta.env.VITE_CACHE_KEY;
  const CACHE_DURATION = parseInt(import.meta.env.VITE_CACHE_DURATION, 10);

  useEffect(() => {
    const fetchYouTubeData = async () => {
      setLoading(true);
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const now = Date.now();

        if (cachedData) {
          const { timestamp, channelInfo, videos } = JSON.parse(cachedData);
          if (now - timestamp < CACHE_DURATION) {
            setChannelInfo(channelInfo);
            setVideos(videos);
            setLoading(false);
            return;
          }
        }

        const res = await fetch(API_URL);
        const data = await res.json();

        setChannelInfo(data.channelInfo);
        setVideos(data.videos);

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            timestamp: now,
            channelInfo: data.channelInfo,
            videos: data.videos,
          })
        );
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeData();
  }, [API_URL, CACHE_KEY, CACHE_DURATION]);

  // ✅ Show nothing until loading is false and data is available
  if (loading || !channelInfo || videos.length === 0) {
    return null;
  }

  return (
    <section className="youtube-section">
      <h2 className="youtube-title">🚀 My YouTube Channel</h2>

      <div className="channel-info">
        <h3>{channelInfo.snippet.title}</h3>
        <p><strong>Subscribers:</strong> {channelInfo.statistics.subscriberCount}</p>
        <p><strong>Total Views:</strong> {channelInfo.statistics.viewCount}</p>
        <a
          href={`https://www.youtube.com/channel/${channelInfo.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-button"
        >
          Visit Channel ↗
        </a>
      </div>

      <div className="video-grid">
        {videos.map((video) => (
          <div className="video-card" key={video.id.videoId}>
            <iframe
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="video-title">{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YouTube;
