import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions";

export const INITIAL_STATE = {
  accountId: null,
  authenticated: false,
  user: null
};

export function authReducer(state, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state,
        accountId: action.payload.accountId,
        authenticated: Boolean(action.payload.authenticated),
        user: action.payload.user
      };

    case LOGOUT_USER:
      return { ...state, ...INITIAL_STATE };

    default:
      throw new Error(`Could not dispatch action of type ${action.type}`);
  }
}
