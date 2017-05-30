import { GET_MESSAGE } from '../actions/types';

export function getMessage() {
  return {
    type: GET_MESSAGE,
    payload: 'Welcome',
  };
}
