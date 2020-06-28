import { PAGINATION_LIMIT } from "../../config/pagination";

export function getOffset(curr) {
  return curr * PAGINATION_LIMIT - 1;
}
