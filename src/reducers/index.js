import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import subjectReducer from "./subjectReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

export default combineReducers({
  subjects: subjectReducer,
  form: formReducer,
  auth: authReducer,
  user: userReducer
});
