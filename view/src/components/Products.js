import React, { Component } from 'react';
import Cart from './Cart'
import Loader from './UI/loader'

class Products extends Component{

    state = {
        products: [],
        cart: [],
        loader: true
    }
    
    componentWillMount() {
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
            res.json().then(res => {
                console.log(res.products)
                const products = res.products
                this.setState({products, loader:false})
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.loader ? <Loader show={this.state.loader}/> :
            <div className="row">
            <div className="col-sm-7 col-xs-6 col-md-9">
                            <h4>Products</h4>
                            {this.state.products.map(product => {
                                return(
                                <div key={product.id} className="col-xs-5 col-md-3 col-sm-3 item">
                                        <h3>{product.name}</h3>
                                        <h5>{product.sellingPrice}</h5>
                            </div>)
                            })}
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                </div>
                <div className="col-xs-5 col-md-3 col-sm-3 item">
                    <h6>Product Item</h6>
                    </div>
                </div>
                <div className="col-sm-5 col-xs-6 col-md-3">
                    <Cart />
                </div>
            </div>  }
                </div>
        )
    }
}

export default Products