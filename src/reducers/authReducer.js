import {
  IS_FETCHING,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../actions";

export const INITIAL_AUTH_STATE = {
  account: null,
  authenticated: false,
  user: null,
  loading: false,
};

export function authReducer(state, action = {}) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, loading: action.payload };

    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        account: action.payload.account,
        authenticated: Boolean(action.payload.authenticated),
        user: action.payload.user,
      };

    case LOGOUT_USER:
      return { ...INITIAL_AUTH_STATE };

    default:
      throw new Error(`Could not dispatch action of type ${action.type}`);
  }
}
