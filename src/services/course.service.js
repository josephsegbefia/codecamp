import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class CourseService {
  // Create a new instance of axios with a custom configuration
  constructor(){
    this.api = axios.create({
      baseURL: API_URL || 'http://localhost:5005'
      // We set our API's base URL so that all requests use the same base URL
    });
    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use(config => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem('authToken');

      if(storedToken){
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createCourse = requestBody => {
    return this.api.post('/api/courses/create', requestBody);
  };

  getCourses = () => {
    return this.api.get('/api/courses');
  };

  getCourse = (courseId) => {
    return this.api.get(`/api/courses/${courseId}`);
  }

  editCourse = (requestBody, courseId) => {
    return this.api.post(`/api/courses/${courseId}/edit`, requestBody);
  }

  deleteCourse = (courseId) => {
    return this.api.post(`/api/courses/${courseId}`);
  }

  searchCourse = (name) => {
    return this.api.get(`/api/searchcourses?name=${name}`);
  }

}

const courseService = new CourseService();

export default courseService;
