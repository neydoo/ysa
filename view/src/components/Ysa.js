import React, { Component } from 'react';
import Products from './Products';
import Search from './Search';
import Cart from './Cart';

class Ysa extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <div className="row">
                    <Products />
                    <Cart />
                </div>
            </div>
        )
    }
}

export default Ysa