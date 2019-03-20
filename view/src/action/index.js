export const SET_USER = 'SET_USER' 
export const SET_STAFF = 'SET_STAFF' 
export const SET_ACCESS = 'SET_ACCESS' 
export const REMOVE_CART = 'REMOVE_CART' 
export const ADD_CART = 'ADD_CART' 
export const UPDATE_CART = 'UPDATE_CART' 
export const SET_PRODUCTS = 'SET_PRODUCTS' 

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}

export const setStaff = (staff) => {
    return {
        type: SET_STAFF,
        staff
    }
}

export const setAccess = (access) => {
    return {
        type: SET_ACCESS,
        access
    }
}

export const AddToCart = (product) => {
    return {
        type: ADD_CART,
        product,
        qty: 1
    }
}

export const setProducts = (product,qty) => {
    return {
        type: SET_PRODUCTS,
        product,
        qty
    }
}

export const RemoveFromCart = (cart) => {
    return {
        type: REMOVE_CART,
        cart
    }
}

export const updateCart = (product,qty) => {
    return {
        type: UPDATE_CART,
        product,
        qty
    }
}