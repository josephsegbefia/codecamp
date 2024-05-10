import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class LessonService {
  // Create a new instance of axios with a custom configuration
  constructor() {
    this.api = axios.create({
      baseURL: API_URL || "http://localhost:5005"
      // We set our API's base URL so that all requests use the same base URL
    });
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createLesson = (courseId, requestBody) => {
    return this.api.post(
      `/api/courses/${courseId}/lessons/create`,
      requestBody
    );
  };

  // Get lessons for a user lesson journey
  getLessonLessons = (userId, courseId, limit, currentPage) => {
    return this.api.get(
      `/api/learn/user/${userId}/courses/${courseId}/lessons?limit=${limit}&offset=${
        (currentPage - 1) * limit
      }`
    );
  };

  editLesson = (courseId, lessonId, requestBody) => {
    return this.api.post(
      `/api/courses/${courseId}/lessons/${lessonId}`,
      requestBody
    );
  };

  deleteLesson = (courseId, lessonId) => {
    return this.api.post(`/api/courses/${courseId}/lessons/${lessonId}`);
  };
}

const lessonService = new LessonService();

export default lessonService;
