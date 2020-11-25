import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types"

export const productsReducer = (state = {}, action) => {
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
            console.log("FETCH_PRODUCTS action.payload", action.payload)
            return { items: action.payload, 
                filteredItems: action.payload};
        default:
            return state; 
    }
}
