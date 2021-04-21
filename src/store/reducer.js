import {
  // DECREASE,
  // INCREASE,
  CLEAR,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";
import { initialStore } from "./store";

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case CLEAR:
      return { ...state, cart: [] };

    // case DECREASE:
    //   let newCart = state.cart.map((item) => {
    //     if (item.id === action.payload.id) {
    //       return { ...item, amount: item.amount - 1 };
    //     }
    //     return item;
    //   });

    //   return { ...state, cart: newCart };

    // case INCREASE:
    //   let tempCart = state.cart.map((item) => {
    //     if (item.id === action.payload.id) {
    //       return { ...item, amount: item.amount + 1 };
    //     }
    //     return item;
    //   });
    //   return { ...state, cart: tempCart };

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

    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              return (item = { ...item, amount: item.amount + 1 });
            }
            if (action.payload.toggle === "dec") {
              return (item = { ...item, amount: item.amount - 1 });
            }
          }

          return item;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
