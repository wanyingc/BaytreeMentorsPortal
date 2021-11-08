import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import profileReducer from "./profile";

const reducers = combineReducers({
  form: formReducer,
  profile: profileReducer,
});

export default reducers;