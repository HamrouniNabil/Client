import {
  REGISTER_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from "../constants/actions-types";

const initialState = {
  isLoading: false,
  error: [],
  user: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: true,
      };

    default:
      return state;
  }
};

export default authReducer;
