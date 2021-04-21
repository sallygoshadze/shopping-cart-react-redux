import Item from "../components/Item";
import { DECREASE, INCREASE, CLEAR, REMOVE, GET_TOTALS } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, cart: [] };

    case DECREASE:
      let newCart = [];
      if (action.payload.amount === 1) {
        newCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        newCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
      return { ...state, cart: newCart };

    case INCREASE:
      let tempCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: tempCart };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (total, item) => {
          const { price, amount } = item;
          const itemTotal = price * amount;
          total.total += itemTotal;
          total.amount += amount;
          return total;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
};

export default reducer;
