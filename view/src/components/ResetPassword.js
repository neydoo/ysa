import React, { Component } from 'react'

class ResetPassword extends Component{
    state = {
        disabled: false,
        loader: false,
        success:false,
    }
    render() {
        return (
            <div>
                {!this.state.success ? <div className='col-xs-12 login'>
                    <form>
                        <div className="row vertical-align">
                            <div className="col-xs-1">
                                
                            </div>
                        
                            <div className="col-xs-6 regform">
                                <h2>Reset Password</h2>
                                <hr />
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input type='password' />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type='password' />
                                </div>

                                { !this.state.loader  ?
                        <div className="submit">
                                <button className="submitButton">Reset</button>
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
                        </div>
                    </form>

                </div> : 
            <div class="alert alert-success">
            <strong>Success!</strong> <br /> Your password has been succesfully changed.
          </div> }

            </div>
        )
    }
}

export default ResetPassword