import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Navbar.css'

class Navbar extends Component{
    shouldComponentUpdate(nextProps){
        console.log(nextProps)
        return nextProps.token !== this.props.token
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
                    {this.props.token ?
                        <div>
                            <Link to="#">Account<span className="caret-down"></span></Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                             :
                            <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        );
    }
}
const mSTD = (state) =>{
    return {
        token: state.access
    }
}


export default connect(mSTD,null)(Navbar);