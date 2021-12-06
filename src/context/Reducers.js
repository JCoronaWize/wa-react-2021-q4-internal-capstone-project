// const addProduct = (product, state) => {
//   console.log("adding product", product);
//   const updatedCart = [...state.cart];
//   const updatedItemIndex = updatedCart.findIndex(
//     (item) => item.id === product.id
//   );

//   if (updatedItemIndex < 0) {
//     updatedCart.push({ ...product, quantity: 1 });
//   } else {
//     const updatedItem = {
//       ...updatedCart[updatedItemIndex],
//     };
//     updatedItem.quantity++;
//     updatedCart[updatedItemIndex] = updatedItem;
//   }

//   return { ...state, cart: updatedCart };
// };

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
        console.log('add_action', action)
        let newCart = [...state.cartProducts]
        const itemIndex = state.cartProducts.findIndex((item) => item.id === action.payload)
        if(itemIndex < 0){
            newCart = [...state.cartProducts, { id: action.payload, cartQty: 1 }]
        }else{
            let updateItem = {...newCart[itemIndex]}
            console.log('Increase cart quantity', updateItem.cartQty)
            updateItem.cartQty++
            newCart[itemIndex] = updateItem
            console.log('New Quantity', newCart[itemIndex].cartQty)            
        }
        const newQty = state.cartQuantity + 1
        console.log('newQuantityCart', newCart)
        localStorage.setItem("cart", JSON.stringify({
            cartProducts: newCart
        , cartQuantity: newQty}))
        return {
            cartProducts: newCart
        , cartQuantity: newQty}       
    
    case "REMOVE_PRODUCT":
      return { ...state, cart: state.cart.filter(item=>item.id !== action.payload.id)};

    default:
      return state;
  }
};
