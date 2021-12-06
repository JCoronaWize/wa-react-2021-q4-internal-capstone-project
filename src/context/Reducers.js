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
        let newCart = [...state.cartProducts]
        console.log('add_action', action)
        const itemIndex = state.cartProducts.findIndex((item) => item.id === action.payload.id)
        if(itemIndex < 0){
            newCart = [...state.cartProducts, { ...action.payload, cartQty: 1 }]
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
        console.log('REMOVE FROM CART DISPATCH', action)
        localStorage.setItem("cart", JSON.stringify({ ...state, cartProducts: state.cartProducts.filter(item=>item.id !== action.payload)}))        
      return { ...state, cartProducts: state.cartProducts.filter(item=>item.id !== action.payload)};
    case "CHANGE_QUANTITY":
            console.log('Change quantity', action.newQ)
            const newQtyB = action.newQ
            let newCartB = [...state.cartProducts]
            const itemIndexB = state.cartProducts.findIndex((item) => item.id === action.payload)
            let updateItemB = {...newCartB[itemIndexB]}

            console.log('Increase cart quantity', updateItemB.cartQty)
            updateItemB.cartQty = newQtyB
            newCartB[itemIndexB] = updateItemB
            console.log('New Quantity', newCartB[itemIndexB].cartQty)   
            
            console.log('newQuantityCart', newCartB)
            localStorage.setItem("cart", JSON.stringify({
                cartProducts: newCartB
            , cartQuantity: newQtyB}))
            return {
                cartProducts: newCartB
            , cartQuantity: newQtyB}               

    default:
      return state;
  }
};
