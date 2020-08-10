const INITIAL_STATE = {
  isLogin: false,
};

const reducer = (store = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONTROL':
      return { ...store, isLogin: true };
    case 'SIGN_IN':
      return { ...store, isLogin: true };
    case 'LOGOUT':
      return { ...store, isLogin: false };
    default:
      return store;
  }
};

export default reducer;
