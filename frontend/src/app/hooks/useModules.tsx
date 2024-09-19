import { useEffect, useState } from "react";
import { getModules } from "@/app/lib/api";

interface ModuleProps {
  id: string;
  title: string;
  description: string;
}

const useModules = (courseId: string) => {
  const [modules, setModules] = useState<ModuleProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      if (!courseId) {
        setError("Invalid course ID");
        setLoading(false);
        return;
      }

      try {
        const data = await getModules(courseId);
        setModules(data.results);
      } catch (err: any) {
        setError('Failed to load modules: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModules();
  }, [courseId]);

  return { modules, loading, error };
};

export default useModules;
