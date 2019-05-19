import React, { Component } from 'react'
import { connect } from "react-redux";
import { RemoveFromCart, AddToCart } from '../action'
import { bindActionCreators } from 'redux';

class Cart extends Component{
    render() {
        let totalPrice = 0 //initialises the cost  total
        let qtyNotation = 'pc'
        this.props.cart.map(cartTotal => {
       let sellingPrice = cartTotal[1].sellingPrice * cartTotal[0] // returns the price in relation to the quantity of the item in the cart  
            if (cartTotal[0] > 1) {
           qtyNotation = 'pcs'
       }
            return totalPrice += sellingPrice
        })
        
        return (
            <div className="col-md-12 col-xs-12 col-sm-12 cart">
                <h4>Cart <div style={{ height: '40px', display: 'inline', width: '40px', backgroundColor: 'yellowgreen', borderRadius: '50%' }}><em style={{color:'red'}}>{this.props.cart.length}</em></div>
                </h4>
                    <ol style={{display:'block'}}>
                    {this.props.cart.length >= 1 ? // checks if there are items on the cart before displaying the cart items
                    this.props.cart.map(cartItem => {
                        return(
                            <li key={cartItem[1].id} style={{display:'block'}}>
                                <div className="cartitem col-md-12 col-xs-12 col-sm-12" onClick={()=>this.props.RemoveFromCart(cartItem) }> {/*removes item from the cart on click*/}
                                     <h6>Name: {cartItem[1].name}</h6>
                                     <h6>Unit Price: &#x20a6;{cartItem[1].sellingPrice}</h6>
                                     <h6>Quantity: {cartItem[0]} {qtyNotation}</h6>
                                     <h6>Total Item Price: &#x20a6;{cartItem[1].sellingPrice * cartItem[0]}</h6>
                                </div>
                            </li>
                        )
                    }) : null
  
    }  
                    </ol>
                <br />
                <hr />
                {this.props.cart.length >= 1 ? <p style={{display:'block'}}>Total:  &#x20a6;{totalPrice} </p> : null} {/* checks if there are items on the cart before displaying the total */}
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

