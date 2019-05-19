import React from 'react'
import Modal from './UI/Modal'

const AdminLogin = (props) => {
    return (
        <div>
            <Modal  show={props.shows} clicked={props.clicked}>
                <div className='col-xs-12 login'>
                    {props.showErr ?
                        <p className="error">  <strong>Error!</strong> <br />
                            {props.error}
                        </p> : null}
                    <form onSubmit={props.submit}>
                        <div className="row vertical-align">
                            <div className="col-xs-1">
                            </div>
                        
                            <div className="col-xs-6 regform">
                                <h2>Login to perform this action</h2>
                                <hr />
                                <div className="form-group">
                                    <label>username or email</label>
                                    <input onChange={props.input} name='email' type='text' required value={props.email} />
                                </div>

                                <div className="form-group">
                                <label>password</label>
                                <input onChange={props.input} name='password' type='password' required value={props.password} />
                            </div>

                                {!props.loader ?
                                    <div className="submit">
                                        <button className="submitButton">Login</button>
                                    </div> :
                                    <div className="submit">
                                        <button className="submitted" disabled={props.disabled}>
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

                </div>
            </Modal>
        </div>
    )
}

export default AdminLogin