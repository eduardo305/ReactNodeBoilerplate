import {
  GET_MESSAGE_SUCCESS,
  GET_MESSAGE_REQUEST,
  GET_MESSAGE_FAIL,
} from '../actions/types';

const INITIAL_STATE = { msg: {} };

// isLoading is a mechanism to display/hide an future spinning
export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MESSAGE_REQUEST:
      return { ...state, isLoading: true };
    case GET_MESSAGE_SUCCESS:
      return { ...state, msg: action.payload, isLoading: false };
    case GET_MESSAGE_FAIL:
      // Here we are assuming the error message is going to be sent
      // from the server
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
