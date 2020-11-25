const { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } = require("../types");

console.log("orderReducer.js")
const orderReducer = (state = {},action)=>{
    switch(action.type){
        case CREATE_ORDER:
            console.log("CREATE_ORDER state",state)
            return{order: action.payload}
        case CLEAR_ORDER:
            console.log("CLEAR_ORDER state",state)
            return {order: null}
        case FETCH_ORDERS:
            console.log("FETCH_ORDERS action payload", 
            action.payload)
            return{orders: action.payload}       
        default:
            return state
    }
}

export {orderReducer}