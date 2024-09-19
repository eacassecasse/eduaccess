import { useState, useEffect } from "react";

interface ImageData {
  id: string;
  author: string;
  url: string;
  download_url: string;
}

export function useParticipants() {
  const [images, setImages] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('https://picsum.photos/v2/list?page=1&limit=16');
        if (!res.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await res.json();
        setImages(data);
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []); // Only fetch once on component mount

  return { images, isLoading, hasError };
}
