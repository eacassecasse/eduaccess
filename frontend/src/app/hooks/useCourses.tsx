import { useEffect, useState } from "react";
import { CourseProps } from "@/app/components/course";
import { getCourses } from "@/app/lib/api";

const useCourses = () => {

  const [courses, setCourses] = useState<CourseProps[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data.results)
      } catch (err: any) {
        setError('Failed to load courses: ' + err.message);
      } finally {
        setLoading(false)
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

export default useCourses;
