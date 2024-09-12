import { useState, useEffect } from "react";

interface ImageData {
  id: string;
  author: string;
  url: string;
  download_url: string;
}

export function useParticipants() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://picsum.photos/v2/list?page=1&limit=16');
        if (!res.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await res.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []); // Only fetch once on component mount

  return { images, loading, error };
}
