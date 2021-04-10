import { DECREASE, INCREASE, CLEAR, REMOVE } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, cart: [] };
    case DECREASE:
      console.log('decreased');
    case INCREASE:
      console.log('increased');
    case REMOVE:
      console.log('removed');

    default:
      return state;
  }
};

export default reducer;
