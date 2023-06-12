import { combineReducers } from "redux";

import formReducer from "./form/formReducer";
import otherReducer from "./otherReducer/otherReducer";

export const rootReducer = combineReducers({
  formReducer,
  otherReducer,
});
