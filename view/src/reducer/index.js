import { combineReducers } from "redux";
import { SET_ACCESS } from "../action";
import { SET_USER } from "../action";
import { SET_STAFF } from "../action";
const userState = sessionStorage.getItem('user')
const accessState = sessionStorage.getItem('token')
const staffState = sessionStorage.getItem('staff')

const user = (state = userState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.user
        default:
            return state
    }
}
const staff = (state = staffState, action) => {
    switch (action.type) {
        case SET_STAFF:
            return action.staff
        default:
            return state
    }
}
const access = (state = accessState, action) => {
    switch (action.type) {
        case SET_ACCESS:
            return action.access
        default:
            return state
    }
}

const rootReducer = combineReducers({user , staff, access}) 
export default rootReducer