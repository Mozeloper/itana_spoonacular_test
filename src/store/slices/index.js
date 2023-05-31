import { combineReducers } from "redux";
import darkModeSlice from "./darkModeSlice";

const rootReducer = combineReducers({
  darkModeSlice,
});

export default rootReducer;
