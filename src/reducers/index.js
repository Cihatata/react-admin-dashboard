const INITIAL_STATE = {
  isLogin: false,
  userList: [],
  errorLog: [],
  sysInfo: {},
  errMessage: '',
  authLog: [],
  requestCount: [],
  mailLog: [],
};

const reducer = (store = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONTROL':
      return { ...store, isLogin: true };
    case 'SIGN_IN':
      return { ...store, isLogin: true };
    case 'LOGOUT':
      return { ...store, isLogin: false };
    case 'GET_USER':
      return { ...store, userList: action.payload };
    case 'GET_USER_ERR':
      return { ...store, errMessage: action.payload };
    case 'GET_SYSINFO':
      return { ...store, sysInfo: action.payload };
    case 'GET_SYSINFO_ERR':
      return { ...store, errMessage: action.payload };
    case 'GET_ERRORLOG':
      return { ...store, errorLog: action.payload };
    case 'GET_ERRORLOG_ERR':
      return { ...store, errMessage: action.payload };
    case 'GET_AUTHLOG':
      return { ...store, authLog: action.payload };
    case 'GET_AUTHLOG_ERR':
      return { ...store, errMessage: action.payload };
    case 'GET_REQUEST_COUNT':
      return { ...store, requestCount: action.payload };
    case 'GET_REQUEST_COUNT_ERR':
      return { ...store, errMessage: action.payload };
    case 'GET_MAIL_LOG':
      return { ...store, mailLog: action.payload };
    case 'GET_MAIL_LOG_ERR':
      return { ...store, errMessage: action.payload };
    default:
      return store;
  }
};

export default reducer;
