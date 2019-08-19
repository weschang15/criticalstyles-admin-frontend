import {
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
  IS_FETCHING
} from "../actions";

export const INITIAL_STATE = {
  accountId: null,
  accountName: null,
  authenticated: false,
  user: null,
  loading: false
};

export function authReducer(state, action = {}) {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, loading: action.payload };

    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        accountId: action.payload.accountId,
        accountName: action.payload.accountName,
        authenticated: Boolean(action.payload.authenticated),
        user: action.payload.user
      };

    case LOGOUT_USER:
      return { ...INITIAL_STATE };

    default:
      throw new Error(`Could not dispatch action of type ${action.type}`);
  }
}
