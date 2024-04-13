// src/actions/authActions.js
export const loginSuccess = (token, userType) => ({
    type: 'AUTH_SUCCESS',
    payload: { token, user: { type: userType } }, 
  });
  
  export const loginFail = (error) => ({
    type: 'AUTH_FAIL',
    payload: error,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  