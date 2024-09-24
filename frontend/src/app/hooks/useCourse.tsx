import { useContext, useEffect, useState } from "react";
import { getCourses } from "@/app/lib/api";
import { CourseContext } from "@/app/context/CourseContext";

const useCourse = () => {

  const context = useContext(CourseContext);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null);

  if (!context) {
    throw new Error("useCourses must be used within a CourseProvider")
  }

  const { courses, setCourses } = context;

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

    if (!courses || courses.length === 0) {
      fetchCourses()
    } else {
      setLoading(false)
    }
  }, [courses, setCourses]);

  return { courses, loading, error };
};

export default useCourse;
