import { combineReducers } from "redux";
import { SET_ACCESS, SET_USER, SET_STAFF, REMOVE_CART, ADD_CART, UPDATE_CART } from "../action";
// const initialCart = {
//     products: [],
//     qty: 0
    
// }

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

// const products = (state = [], action) => {
    
// }

const cart = (state = [], action) => {
    switch (action.type) {
        case ADD_CART:
            return [...state, [action.qty,action.product]]
        case REMOVE_CART:
        // let cart = state.filter(item => item.id !== action.cart.id)
            return state.filter(item=> item[1].id !== action.cart[1].id)  
        case UPDATE_CART:
        state.filter(item=> item[1].id === action.product[1].id)
            // return [...state, [action.qty, action.product]]
            state.map(item => {
            console.log(item)
            if (item[1].id === action.product[1].id){
                return action.product[0] = Number(action.qty) +  0
            }
            return item
        })
            return state
        default:
            return state
    }
}
    
const rootReducer = combineReducers({user , cart, staff, access}) 
export default rootReducer