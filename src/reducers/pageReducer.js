import { SET_PAGE } from "../actions";

export const INITIAL_PAGE_STATE = {
  pageId: null,
  pageName: false,
};

export function pageReducer(state, action = {}) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, ...action.payload };

    default:
      throw new Error(`Could not dispatch action of type ${action.type}`);
  }
}
