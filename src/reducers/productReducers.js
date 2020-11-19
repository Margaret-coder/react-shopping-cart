import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types"

console.log("productReducers.js")
export const productsReducer = (state = {}, action) => {
    console.log("productReducers.js middle")
    switch (action.type) {
        case FILTER_PRODUCTS_BY_SIZE:
            console.log("productReducers.js case FILTER_PRODUCTS_BY_SIZE")
            console.log(action.payload.items)
            return{
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items,
            }
        case ORDER_PRODUCTS_BY_PRICE:
            console.log("productReducers.js case ORDER_PRODUCTS_BY_PRICE")
            console.log(action.payload.items)
            return{ 
                ...state,
                sort: action.payload.sort,
                filteredItems: action.payload.items
        }    
        case FETCH_PRODUCTS:
            console.log("productReducers.js case FETCH_PRODUCTS")
            console.log(action.payload.items)
            console.log(action.payload)
            return { items: action.payload, 
                filteredItems: action.payload};
        default:
            console.log("default return state")
            console.log("state", state)
            console.log("action", action)
            return state; 
    }
}
console.log("productReducers.js end")
