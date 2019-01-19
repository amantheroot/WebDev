import { combineReducers } from "redux";

import user from "./userreducer";
import tweets from "./tweetsreducer";

export default combineReducers({
  tweets,
  user
});
