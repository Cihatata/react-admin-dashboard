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
