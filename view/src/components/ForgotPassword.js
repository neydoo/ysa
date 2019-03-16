import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class ForgotPassword extends Component{
    state = {
        disabled: false,
        loader: false,
        emailSent: false
        
    }
    render() {
        return (
            <div>
                { !this.state.emailSent ? <div className='col-xs-12 login'>
                    <form>
                        <div className="row vertical-align">
                            <div className="col-xs-1">
                                
                            </div>
                        
                            <div className="col-xs-6 regform">
                                <h4>Please type your email to reset your password</h4>
                                <hr />
                                <div className="form-group">
                                    <label> Email</label>
                                    <input type='text' />
                                </div>

                                <br />
                                <br />
                                
                                { !this.state.loader  ?
                        <div className="submit">
                                <button className="submitButton">Submit</button>
                        </div>   :
                        <div className="submit">
                            <button className="submitted" disabled={this.state.disabled}>
                                <span>
                                    <div className="gooey">
                                        <span className="dot"></span>
                                        <div className="dots">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </span>
                            </button>
                        </div>}
                                
                            </div>
                            <div className="col-xs-5 forgot-div">
                                <Link to='/login'>
                                <div className="submit" style={{color:'black'}}>
                                    <button className="btn submitButton">Login </button>
                                </div>
                                </Link>
                                
                            </div>
                        </div>
                    </form>

                </div> :

                <div class="alert alert-success alert-dismissible">
                    <Link to="/" class="close" data-dismiss="alert" aria-label="close">&times;</Link>
                        <strong>Success!</strong> <br />
                        We've sent you an email. Follow the link to reset your password
                </div>
}
            </div>
        )
    }
}

export default ForgotPassword