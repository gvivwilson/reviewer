import { FETCH_SUBJECTS, FETCH_SUBJECT } from "./types";

export const fetchSubjects = () => async dispatch => {
  const response = await window.subjects.get();

  dispatch({ type: FETCH_SUBJECTS, payload: response });
};

export const fetchSubject = id => async dispatch => {
  const response = await window.subjects.get(id);

  dispatch({ type: FETCH_SUBJECT, payload: response });
};
