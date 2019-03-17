import React, { Component } from 'react'
import { connect } from "react-redux";
import { RemoveFromCart, AddToCart } from '../action'
import { bindActionCreators } from 'redux';

class Cart extends Component{
    render() {
        return (
            <div className="col-md-12 cart">
                <h4>Cart </h4>
                    <ol>
                    {this.props.cart.map(cart => {
                            return(
                                <li key={cart.id}>
                                    <div className="cartitem" onClick={()=>this.props.RemoveFromCart(cart) }>
                                    {console.log(cart)}
                                        <h6>{cart.name}</h6>
                                        <h6>{cart.sellingPrice}</h6>
                                    </div>
                                </li>
                            )
                        })}
                        
                       
                    </ol>
                <p>Total: N50,000 </p>
            </div>
        )
    }
}

const mSTD = (state) => {
    return {
        cart: state.cart,
    }
}

const mDTP = (dispatch) => {
    return bindActionCreators({RemoveFromCart, AddToCart},dispatch)
}
export default connect(mSTD, mDTP)(Cart);