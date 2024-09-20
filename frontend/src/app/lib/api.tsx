import nookies from 'nookies';
import api from "@/app/lib/axiosInstance";

const API_URL = "https://eduaccess.up.railway.app/api/v1"; // Base URL for your API

// Generic function to make GET requests
export async function fetchData(endpoint: string) {
  const token = nookies.get(null).access_token;

  try {
    const response = await api.get(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log('Token: ', token)

    if (response.status !== 200) {
      throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
    }
    return await response.data;
  } catch (error: any) {
    console.error("API fetch error:", error);
    throw error;
  }
}

// Fetch all Courses
export async function getCourses() {
  return fetchData("/courses");
}

// Fetching Modules for a specific Course
export async function getModules(courseId: string) {
  return fetchData(`/courses/${courseId}/modules`);
}

// Fetching Lessons for a specific Module
export async function getLessons(moduleId: string) {
  return fetchData(`/modules/${moduleId}/lessons`);
}


// Fetching Quizzes for a specific Module
export async function getQuizzes(moduleId: string) {
  return fetchData(`/modules/${moduleId}/quizzes`);
}

// Fetching Questions for a specific Quiz
export async function getQuestions(quizId: string) {
  return fetchData(`/quizzes/${quizId}/questions`);
}

// Fetching Options for a specific Question
export async function getOptions(questionId: string) {
  return fetchData(`/questions/${questionId}/options`);
}

// Fetching All the Resources
export async function getResources() {
  return fetchData(`/resources`);
}

export async function getUser(id: string) {
  return fetchData(`/users/${id}`);
}
