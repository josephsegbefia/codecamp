/* eslint-disable no-unused-vars */
import axios from 'axios';

// const PISTON_API_URL = import.meta.env.VITE_PISTON_API_URL;
const PISTON_API_URL = "https://emkc.org/api/v2/piston"
console.log(PISTON_API_URL);

class RunCodeService {
  constructor(){
    this.api = axios.create({
      baseURL: PISTON_API_URL
      // We set our API's base URL so that all requests use the same base URL
    });
  }

  // getRunTimes = () => {
  //   return this.api.get('/runtimes');
  // }
}

const runCodeService = new RunCodeService();

export default runCodeService;
