// import _ from "lodash";

import { FETCH_SUBJECTS, FETCH_SUBJECT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return { ...state, ...action.payload };
    case FETCH_SUBJECT:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
