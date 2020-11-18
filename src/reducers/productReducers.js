import {FETCH_PRODUCTS} from "../types"

export const productsReducer = (state = {}, action) => {
    console.log("productReducers.js case FETCH_PRODUCTS")
    switch (action.type) {
        case FETCH_PRODUCTS:
            return { items: action.payload};
        default:
            return state; 
    }
}