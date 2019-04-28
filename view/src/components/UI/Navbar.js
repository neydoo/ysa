import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component{
    state={
        logged:false,
    }
    render() {
        return (
            <div className="main-nav">
                <div className="nav-logo">YSA</div>
                <div className="left-nav">
                    <div className="header-links">
                        <Link to="/"> Home</Link>
                        <Link to="/products"> Store</Link>
                    </div>
                </div>
                        
                <div className="right-nav">
                    {this.state.logged ?
                            <Link to="#">Account<span className="caret-down"></span></Link> :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        );
    }
}
export default Navbar;