import { FETCH_SUBJECTS, FETCH_SUBJECT, SIGN_IN } from "./types";

export const fetchSubjects = () => async dispatch => {
  const response = await window.subjects.get();

  dispatch({ type: FETCH_SUBJECTS, payload: response });
};

export const fetchSubject = id => async dispatch => {
  const response = await window.subjects.get(id);

  dispatch({ type: FETCH_SUBJECT, payload: response });
};

export const signIn = details => async dispatch => {
  const response = await window.users.post(details);
  console.log(response);

  dispatch({ type: SIGN_IN, payload: response.userId });
};
