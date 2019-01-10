const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "login falied"
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signed out success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("user has signed up successfully");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("sign up error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
