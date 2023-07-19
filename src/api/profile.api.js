import axios from 'axios';
import { getUserToken } from '../helpers/userAuthHelper';
import { BASE_URL } from '../constants/api';
const getHeaders = async () => {
  const headers = await getUserToken();

  return {
    'content-type': 'application/json',
    'token-type': 'Bearer',
    'access-token': headers.token,
    client: headers.client,
    uid: headers.uid,
    expiry: headers.expiry,
    ACCEPT: 'application/json',
  };
};

export const updateProfile = async (data) => {
  const headers = await getHeaders();
  return axios.put(`${BASE_URL}auth`,data,{
    headers: headers,
  });
  
};


