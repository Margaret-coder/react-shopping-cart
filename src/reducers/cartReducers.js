import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  // console.log("cartReducers.js action.type", action.type)
  switch (action.type) {
    case ADD_TO_CART:
     // console.log("ADD_TO_CART")  
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
     // console.log("ADD_TO_CART")  
      return { cartItems: action.payload.cartItems };
    default:
     // console.log("cartReducers default return state")  
      return state;
  }
};
