import CHANGE_SCORE from '../actions';

const initialState = {
  score: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SCORE:
      return {
        ...state,
        score: this.state.score + 1
      };
    default:
      return state;
  }
}
