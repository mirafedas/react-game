import CHANGE_SCORE from '../constants/actionTypes';

const initialState = {
  score: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: state.score + 1
      };
    default:
      return state;
  }
}
