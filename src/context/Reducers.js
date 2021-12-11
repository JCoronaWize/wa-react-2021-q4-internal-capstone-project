export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      let newCart = [...state.cartProducts];
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex < 0) {
        newCart = [...state.cartProducts, { ...action.payload, cartQty: 1 }];
      } else {
        let updateItem = { ...newCart[itemIndex] };
        updateItem.cartQty++;
        newCart[itemIndex] = updateItem;
      }
      const newQty = state.cartQuantity + 1;
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartProducts: newCart,
          cartQuantity: newQty,
        })
      );
      return {
        cartProducts: newCart,
        cartQuantity: newQty,
      };
    case "REMOVE_PRODUCT":
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...state,
          cartProducts: state.cartProducts.filter(
            (item) => item.id !== action.payload
          ),
        })
      );
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "CHANGE_QUANTITY":
      const newQtyB = action.newQ;
      let newCartB = [...state.cartProducts];
      const itemIndexB = state.cartProducts.findIndex(
        (item) => item.id === action.payload
      );
      let updateItemB = { ...newCartB[itemIndexB] };
      updateItemB.cartQty = newQtyB;
      newCartB[itemIndexB] = updateItemB;
      localStorage.setItem(
        "cart",
        JSON.stringify({
          cartProducts: newCartB,
          cartQuantity: newQtyB,
        })
      );
      return {
        cartProducts: newCartB,
        cartQuantity: newQtyB,
      };

    default:
      return state;
  }
};
