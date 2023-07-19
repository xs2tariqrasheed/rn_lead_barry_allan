import axios from 'axios';
import OneSignal from 'react-native-onesignal';
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

export const loginRequest = (email, password) => {
  return axios.post(`${BASE_URL}/auth/sign_in`, {
    email: email,
    password: password,
  });
};

export const signUpRequest = (data) => {
  return axios.post(`${BASE_URL}/auth`, {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone_no: data.telephone,
    ssn: data.socialSecurityNumber,
    street_address: data.streetAddress,
    postal_code: data.zipCode,
    address: data.location,
    floor: data.floor,
    port_code: data.portCode,
    password: data.password,
    confirm_password: data.confirmPassword,
    user_role: 'customer',
  });
};

export const signUpRequestCompany = (data) => {
  return axios.post(`${BASE_URL}/auth`, {
    organization_number: data.organizationNumber,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone_no: data.telephone,
    street_address: data.streetAddress,
    postal_code: data.zipCode,
    address: data.location,
    floor: data.floor,
    port_code: data.portCode,
    password: data.password,
    confirm_password: data.confirmPassword,
    user_role: 'customer',
  });
};

export const signUpRequestFixer = (data) => {
  return axios.post(`${BASE_URL}/auth`, {
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    password: data.password,
    confirm_password: data.confirmPassword,
    personal_identity_number: data.personalIdentityNumber,
    phone_no: data.telephone,
    address: data.address,
    postal_code: data.postalCode,
    city: data.city,
    nationality: data.nationality,
    emergency_contact_name: data.emergencyContactName,
    emergency_contact_number: data.emergencyContactNumber,
    bank_name: data.bankName,
    bank_clearing_number: data.clearingNumber,
    bank_account_number: data.bankAccountNumber,
    user_role: 'worker',
  });
};

export const signOutRequest = async () => {
  const headers = await getHeaders();

  return axios.delete(`${BASE_URL}/auth/sign_out`, {
    headers: headers,
  });
};

export const getUserInfo = async () => {
  const headers = await getHeaders();

  return axios.get(`${BASE_URL}/api/v1/customer/users`, {
    headers: headers,
  });
};

export const getUserInfo2 = async () => {
  const headers = await getHeaders();
  const result = axios.get(`${BASE_URL}/api/v1/customer/users`, {
  headers: headers,
  })
  return result
  };


export const getLocationDetail = async (region) => {
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${region.latitude},${region.longitude}&key=AIzaSyCg88sPKppV592y6PH2K_b5zn7Qmw-qCwc`);
};

export const updateUserInfo = async (data) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/api/v1/customer/users`,
    {
      user: {
        address: data.address,
        phone_no: data.telephone,
        postal_code: data.postalCode,
        city: data.city,
        floor: data.floor,
        port_code: data.portCode,
      },
    },
    {
      headers: headers,
    }
  );
};

export const sendDeviceId = async () => {
  const headers = await getHeaders();
  const response = await OneSignal.getDeviceState();
 
  axios.put(
    `${BASE_URL}/api/v1/customer/users`,
    {
      user: {
        device_id: response.userId,
      },
    },
    {
      headers: headers,
    }
  );
};

export const requestResetToken = (email) => {
  return axios.post(`${BASE_URL}/auth/password`, {
    email: email,
    redirect_url: BASE_URL,
  });
};

export const resetPassword = ({ token, password, confirmPassword }) => {
  return axios.put(`${BASE_URL}/auth/password`, {
    reset_password_token: token,
    password: password,
    password_confirmation: confirmPassword,
  });
};

export const changePasswordRequest = async (currentPassword, newPassword) => {
  const headers = await getHeaders();

  return axios.put(
    `${BASE_URL}/auth/password`,
    {
      current_password: currentPassword,
      password: newPassword,
      password_confirmation: newPassword,
    },
    {
      headers: headers,
    }
  );
};
