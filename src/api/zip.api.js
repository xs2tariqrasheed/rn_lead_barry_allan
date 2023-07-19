import axios from 'axios';
import { BASE_URL } from '../constants/api';

export const checkZipCode = (zip) => {
  return axios.get(`${BASE_URL}/api/v1/verify_zone?post_code=${zip}`);
};
