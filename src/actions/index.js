import axios from 'axios';

export const control = (payload) => {
  return {
    type: 'CONTROL',
    payload,
  };
};

export const signIn = () => {
  return {
    type: 'SIGN_IN',
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};

export const getUser = () => (dispatch) => {
  axios
    .get('../fakedata/userList.json')
    .then((res) => dispatch({ type: 'GET_USER', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_USER_ERR', payload: err }));
};

export const getSysinfo = () => (dispatch) => {
  axios
    .get('../fakedata/sysInfo.json')
    .then((res) => dispatch({ type: 'GET_SYSINFO', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_SYSINFO_ERR', payload: err }));
};

export const getErrorlog = () => (dispatch) => {
  axios
    .get('../fakedata/errorLog.json')
    .then((res) => dispatch({ type: 'GET_ERRORLOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_ERRORLOG_ERR', payload: err }));
};

export const getAuthlog = () => (dispatch) => {
  axios
    .get('../fakedata/authLog.json')
    .then((res) => dispatch({ type: 'GET_AUTHLOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_AUTHLOG_ERR', payload: err }));
};

export const getRequestcount = () => (dispatch) => {
  axios
    .get('../fakedata/requestHit.json')
    .then((res) => dispatch({ type: 'GET_REQUEST_COUNT', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_REQUEST_COUNT_ERR', payload: err }));
};

export const getMaillog = () => (dispatch) => {
  axios
    .get('../fakedata/mailLog.json')
    .then((res) => dispatch({ type: 'GET_MAIL_LOG', payload: res.data }))
    .catch((err) => dispatch({ type: 'GET_MAIL_LOG_ERR', payload: err }));
};

export const getThreats = () => async (dispatch) => {
  await axios
    .get('../fakedata/threats.json')
    .then((res) => res.data)
    .then((res) => dispatch({ type: 'GET_THREATS', payload: res.urls }))
    .catch((err) => dispatch({ type: 'GET_THREATS', payload: err }));
};
