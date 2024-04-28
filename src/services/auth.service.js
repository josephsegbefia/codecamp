import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

class AuthService {
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

  login = requestBody => {
    return this.api.post('/auth/login', requestBody);
  };

  signup = requestBody => {
    return this.api.post('/auth/signup', requestBody);
  };

  verify = () => {
    return this.api.get('/auth/verify');
  }

  verifyEmail = requestBody => {
    return this.api.post('/auth/verify-email', requestBody);
  }

  passwordResetEmail = requestBody => {
    return this.api.post('/auth/password-reset-email', requestBody);
  }

  passwordReset = (requestBody) => {
    return this.api.post('/auth/password-reset', requestBody);
  }
}

const authService = new AuthService();

export default authService;
