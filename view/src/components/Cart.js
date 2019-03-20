import React, { Component } from 'react'
import { connect } from "react-redux";
import { RemoveFromCart, AddToCart } from '../action'
import { bindActionCreators } from 'redux';

class Cart extends Component{
    
    render() {
        return (
            <div className="col-md-12 cart">
                <h4>Cart
                    {/* <div><div style={{ height: '40px', display: 'inline', width: '40px', backgroundColor: 'yellowgreen', borderRadius: '50%' }}><em>{this.props.cart.length}</em></div></div> */}
                </h4>
                    <ol>
                        
           
                    {this.props.cart.length >= 1 ?
                    this.props.cart.map(cartItem => {
                        return(
                            <li key={cartItem[1].id}>
                                <div className="cartitem" onClick={()=>this.props.RemoveFromCart(cartItem) }>
                                {console.log(cartItem[0])}
                                {console.log(cartItem)}
                                     <h6>{cartItem[1].name}</h6>
                                     <h6>{cartItem[1].sellingPrice}</h6>
                                     <h6>{cartItem[0]}</h6>
                                </div>
                            </li>
                        )
                    }) : null
  
    }
                           

                        
                       
                    </ol>
                <p>Total: N50,000 </p>
            </div>
        )
    }
}

const mSTD = (state) => {
    return {
        // cart: Object.values(state.cart),
        cart: state.cart,
    }
}

const mDTP = (dispatch) => {
    return bindActionCreators({RemoveFromCart, AddToCart},dispatch)
}
export default connect(mSTD, mDTP)(Cart);

