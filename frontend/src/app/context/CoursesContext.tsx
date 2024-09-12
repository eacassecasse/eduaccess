import { createContext, useState, useEffect } from 'react';

const CoursesContext = createContext(null);

export function CoursesContextProvider({ children }: { children: React.ReactNode }) {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulate data fetching or use a real API here
    fetch('/api/houses')  // Assuming you have a Next.js API route at /api/houses
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
}

export default CoursesContext;
