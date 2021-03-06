import userConstants from '../constants/userConstants';

const initialState ={ loggedIn: false } ;

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        role: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        role: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}