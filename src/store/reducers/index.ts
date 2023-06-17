import { combineReducers } from "redux";

import otherReducer from "./otherReducer/otherReducer";

export const rootReducer = combineReducers({
  otherReducer,
});
