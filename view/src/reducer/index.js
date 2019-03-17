import { combineReducers } from "redux";
import { SET_ACCESS, SET_USER, SET_STAFF, REMOVE_CART, ADD_CART, UPDATE_CART } from "../action";

const user = (state = [], action) => {
    switch (action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}
const staff = (state = [], action) => {
    switch (action.type) {
        case SET_STAFF:
            return action.staff
        default:
            return state
    }
}
const access = (state = [], action) => {
    switch (action.type) {
        case SET_ACCESS:
            return action.access
        default:
            return state
    }
}

const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_CART:
        return [...state,action.product]
        case REMOVE_CART:
        let cart = state.filter(item => item.id !== action.cart.id)
            return cart  
        case UPDATE_CART:
            let cartProduct = [...state]
            return cartProduct.quantity = action.qty
        default:
            return state
    }
}
    
const rootReducer = combineReducers({user , cart, staff, access}) 
export default rootReducer