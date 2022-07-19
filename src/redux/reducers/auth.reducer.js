import { authConstant } from "./../constants/";

const INITIAL_STATE = {
  token: null,
  user: null,
  isAuthenticated: false,
  authenticating: false,
  users: [],
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authConstant.LOGIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });

    case authConstant.LOGIN_SUCCESS:
      return (state = {
        ...state,
        token: action.payload.token,
        isAuthenticated: true,
        authenticating: false,
        user: action.payload.user,
      });
      case authConstant.GET_ADMINS_SUCCESS:
        return (state = {
          ...state,
          user : action.payload.users
        })
    case authConstant.LOGOUT_SUCCESS:
      return (state = {
        ...INITIAL_STATE,
      });
    case authConstant.USER_CHANGE_PROFILE_SUCCESS:
      return (state = {
        ...state,
        user : {...state.user, profile: action.payload.profile}
      })
      case authConstant.USER_CHANGE_BACKGROUND_PROFILE_SUCCESS:
        return (state = {
          ...state,
          user : {...state.user, background: action.payload.background}
        })
    default:
      return state;
  }
};

export default authReducer;
