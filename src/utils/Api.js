import axios from 'axios';

export default axios.create({
  baseURL: `https://dev.ekstep.in/api/devcon/v3/`
});