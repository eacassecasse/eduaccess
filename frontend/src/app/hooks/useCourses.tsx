import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const rsp = await fetch("http://localhost:8000/courses");
      const db_courses = await rsp.json();
      setCourses(db_courses);
    };

    fetchCourses();
  }, []);

  return courses;
};

export default useCourses;
