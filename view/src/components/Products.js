import React, { Component } from 'react';
import Cart from './Cart'
import Search from './Search'
import Loader from './UI/loader'
import { connect } from "react-redux";
import { updateCart, AddToCart } from '../action'
import { bindActionCreators } from 'redux';
import UpdateCart from './UpdateCart';

class Products extends Component{

    state = {
        products: [],
        allProducts: [],
        cart: [],
        loader: true,
        error: null,
        showErr:false,
        updateCartModal:false,
        qty: '',
        productToUpdate: 0,
        searchValue: "",
    }
    
    componentWillMount() {
       this.fetchProducts()
    }
    
    fetchProducts = () => {
        const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjcyNDI1NX0.4-88vjegT9bit4CXxJNXUKSaDe-XXVLIId-4iNOQA28`
        fetch('/api/product',{
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                // 'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok && res.status !== 400) {
            console.log (res)
           throw Error(res.statusText)

        } 
            res.json().then(res => {
                // console.log(res.products)
                const products = res.products
                this.setState({products, loader:false, allProducts:products})
            })
        }).catch(e=>{
            console.log(e)
            // const error = Object.value(e)
            this.setState({error: e.message , showErr: true, loader:false})
        })
    }
    modalHandler = (e) => {
        e.preventDefault()
        this.state.updateCartModal ? this.setState({updateCartModal:false}) : this.setState({updateCartModal:true})
}
    addTocartHandler = (e,product) =>{
        e.preventDefault()
        this.setState({
            updateCartModel:true,
        })
        if (this.props.cart.length > 0) {
            // this.props.cart.map(cartItem => {
                const ids = this.props.cart.map(item => item[1].id)
                if (ids.includes(product.id)) { // checks if the product is already in the cart
                    this.setState({
                        productToUpdate: product.id,
                        updateCartModal: true,
                    })
                }else if(this.props.cart.length > 0 && !ids.includes(product.id)){
                    this.props.AddToCart(product)
                }
                return null
            // })
        } else {
            this.props.AddToCart(product)
        }
    }
    

    UpdateCartComponentInputHandler = (e) =>{
        e.preventDefault()
        this.setState({qty:e.target.value})
    }
    UpdateCartComponentSubmitHandler = (e) =>{
        e.preventDefault()
        this.setState({ updateCartModal: false })
        this.props.cart.map(product => {
            if (product[1].id === this.state.productToUpdate) {
                // this.setState({ updateCartModal: true, productToUpdate: product.id })
                this.props.updateCart(product ,this.state.qty)
                this.setState({qty: ''})
            }
            return null
        })
        this.setState({qty: ''})
    }

    searchHandler = (e) => {
        e.preventDefault();
        this.setState({searchValue:e.target.value})
        if (this.state.searchValue === "") {
            return null
        } else {
            let results = this.state.allProducts.filter(x => {
                return x.name.toLowerCase().includes(this.state.searchValue)});
            this.setState({products:results})
        }
    }
    render() {
        return (
            <div>
                {this.state.loader ? <Loader show={this.state.loader} /> :
                <div>
                    {this.state.showErr ? 
                        <p className="error">  <strong>Error!</strong> <br />
                            Seems there was an error connecting to the server <br />
                            {this.state.error}
                        </p> :
                    <div>
                                <Search
                                    value={this.state.searchValue}
                                    input={this.searchHandler}
                                />
                        <div className="row">
                            <div className="col-sm-7 col-xs-5 col-md-9">
                                <h4>Products</h4>
                                {this.state.products.map(product => {
                                    return(
                                    <div key={product.id} onClick={(e)=>this.addTocartHandler(e, product)} className="col-xs-12 col-md-3 col-lg-2 col-sm-3 item">
                                            <h3>{product.name}</h3>
                                            <h5>&#x20a6;{product.sellingPrice}</h5>
                                </div>)
                                })}
                        
                            </div>
                            <div className="col-sm-5 col-xs-7 col-md-3">
                                <Cart />
                                <UpdateCart
                                    shows={this.state.updateCartModal}
                                    input={this.UpdateCartComponentInputHandler}
                                    submit={this.UpdateCartComponentSubmitHandler}
                                    clicked={this.modalHandler}
                                    val={this.state.qty}
                                />
                            </div>
                        </div>
                    </div>}
                </div>  }  
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
    return bindActionCreators({updateCart, AddToCart},dispatch)
}

export default connect(mSTD,mDTP)(Products)