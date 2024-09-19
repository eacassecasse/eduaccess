import { useEffect, useState } from "react";
import { getLessons } from "@/app/lib/api";

interface LessonsProps {
  id: string;
  title: string;
  description: string;
}

const useLessons = (moduleId: string | null) => {
  const [lessons, setLessons] = useState<LessonsProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLessons = async () => {
      if (!moduleId) {
        setLoading(false);
        return;
      }

      try {
        const data = await getLessons(moduleId);
        setLessons(data.results);
        setError(null);
      } catch (err: any) {
        setError("Failed to load lessons: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [moduleId]);

  return { lessons, loading, error };
};

export default useLessons;
