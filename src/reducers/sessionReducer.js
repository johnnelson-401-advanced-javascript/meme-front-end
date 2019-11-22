import { SET_SESSION, SET_SESSION_LOADING, SET_SESSION_ERROR } from '../actions/sessionActions';

const initialState = {
  _id: null,
  username: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION_LOADING:
      return { ...state, loading: true };
    case SET_SESSION:
      return { ...action.payload, loading: false };
    case SET_SESSION_ERROR:
      return { ...state, loading: false };
    default:
      return state;
  }
}
