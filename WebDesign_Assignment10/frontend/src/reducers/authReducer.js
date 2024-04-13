//src/reducers/authReducer

const initialState = {
    token: null,
    user: {}, // Ensure user is an object that can store userType among other user-related info
    isAuthenticated: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'AUTH_SUCCESS':
        return {
            ...state,
            token: action.payload.token,
            user: {
              ...state.user,  // Important if other user attributes are maintained in state
              ...action.payload.user,
            },
            isAuthenticated: true,
            error: null,
          };
      case 'AUTH_FAIL':
        return {
          ...state,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...initialState, // Reset to initial state on logout for cleanliness
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  