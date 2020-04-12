import { combineReducers } from "redux";
import authReducer from "./authReducer";
import pitchReducer from "./pitchReducer";
import auth from "./auth";
import navigation from "./navigation";
import alerts from "./alerts";
import register from "./register";

export default combineReducers({
  authReducer,
  pitchReducer,
  alerts,
  auth,
  navigation,
  register,
});
