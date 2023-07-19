import AsyncStorage from '@react-native-async-storage/async-storage';

export const setUserToken = async (header) => {
  try {
    await AsyncStorage.setItem('token', header.token);
    await AsyncStorage.setItem('client', header.client);
    await AsyncStorage.setItem('uid', header.uid);
    await AsyncStorage.setItem('expiry', header.expiry);
  } catch (e) {
    // error
  }
};

export const getUserToken = async () => {
  let token, client, uid, expiry, userRole;
  try {
    token = await AsyncStorage.getItem('token');
    client = await AsyncStorage.getItem('client');
    uid = await AsyncStorage.getItem('uid');
    expiry = await AsyncStorage.getItem('expiry');
    userRole = await AsyncStorage.getItem('userRole');
  } catch (e) {
    // error
  }
  return { token, client, uid, expiry, userRole };
};

export const deleteUserTokens = async () => {
  try {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('client');
    await AsyncStorage.removeItem('uid');
    await AsyncStorage.removeItem('expiry');
  } catch (e) {
    // error
  }
};

export const saveUserRole = async (userRole) => {
  try {
    await AsyncStorage.setItem('userRole', userRole);
  } catch (e) {
    // error
  }
};

export const getUserRole = async () => {
  let role;
  try {
    role = await AsyncStorage.getItem('userRole');
  } catch (e) {
    // error
  }
  return role;
};

export const setUserStatus = async (userStatus) => {
  try {
    await AsyncStorage.setItem('userStatus', userStatus);
  } catch (e) {
    // error
  }
};

export const getUserStatus = async () => {
  let status;
  try {
    status = await AsyncStorage.getItem('userStatus');
  } catch (e) {
    // error
  }
  return status;
};

export const setUserSession = async (userSession) => {
  try {
    await AsyncStorage.setItem('userSession', userSession);
  } catch (e) {
    // error
  }
};

export const getUserSession = async () => {
  let session;
  try {
    session = await AsyncStorage.getItem('userSession');
  } catch (e) {
    console.log(e)
  }
  return session;
};

export const deleteUserSession = async () => {
  try {
    await AsyncStorage.removeItem('userSession');
  } catch (e) {
    // error
  }
};

export const setUserCreds = async (email, password) => {
  try {
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
  } catch (e) {
    // error
  }
};

export const getUserCreds = async () => {
  let mail, code;
  try {
    mail = await AsyncStorage.getItem('email');
    code = await AsyncStorage.getItem('password');
  } catch (e) {
    // error
  }
  return { mail, code };
};

export const deleteUserCreds = async () => {
  try {
    await AsyncStorage.removeItem('email');
    await AsyncStorage.removeItem('password');
  } catch (e) {
    // error
  }
};
