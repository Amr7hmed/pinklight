/* eslint-disable no-unreachable */
const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  console.log(state);
  switch (action.type) {
      case "ADDITEM":
        // Check If Product Is Already Exist
        const exist = state.find((x) => x.id === product.id);
        if (exist) {
          // Increase The Quantity
          return state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty + 1 } : x
          );
        } else {
          const product = action.payload;
          return [
            ...state,
            {
              ...product,
              qty: 1,
            },
          ];
        }
        break;

      case "DECREASEITEM":
          // Check If Product Is Already Exist
          const exist1 = state.find((x) => x.id === product.id);
          if (exist1.qty === 1) {
            return state.filter((x) => x.id !== exist1.id);
          } else {
            return state.map((x) =>
              x.id === product.id ? { ...x, qty: x.qty - 1 } : x
            );
          }
        break;


    case "DELETITEM":
        return state.map((x) =>
          x.id === product.id ? { ...x } : x
        );
      break;

    default:
      return state;
      break;
  }
};

export default handleCart;
