const initialState = {
  cart: {},
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CART': {
      return {
        ...state,
        cart: action.payload.cart,
      };
    }

    default:
      return state;
  }
};

export default cart;