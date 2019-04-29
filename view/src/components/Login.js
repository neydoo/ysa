import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Login extends Component{
    state = {
        disabled: false,
        loader: false,
        email: '', // username or email input
        password: '',
        error: null,
        showErr: false,
    }

    submitHandler = (e) =>{
        e.preventDefault()
        this.setState({loader:true,disabled:true,showErr:false,})
        
        const data = new FormData()
        data.append('email',this.state.email)
        data.append('password',this.state.password)
        fetch('/api/auth/login',{
            method: 'POST',
            body : data
        }).then(res =>{
        this.setState({loader:false,disabled:false})
            console.log(res)
            if (!res.ok && res.status !== 400) {
                console.log (res)
               throw Error(res.statusText)

            } else if (res.status === 400) {
                res.json().then(res => {
                    console.log(res.message)
                    const errorMsg = Object.values(res.message)
                    // displays errors depending on what the error is
                    if (errorMsg[0] === 'username') {
                        this.setState({error :' Invallid Username/Password', showErr: true})
                    }else if (errorMsg[0] === 'email') {
                        this.setState({error :' Invallid Email/Password', showErr: true})
                    } else if (errorMsg[0] === 'password') {
                        this.setState({error :' Invallid Password', showErr: true})
                    }
                })
            }else {
                res.json().then(res=>{
                    console.log(res.user[0].staff)
                    const staff = res.user[0].staff
                    const user = res.user[0]
                    const token = res.token.token
                    //trying to save to seession sha
                    sessionStorage.setItem("staff", JSON.stringify(staff));
                    sessionStorage.setItem("user", JSON.stringify(user));
                    sessionStorage.setItem("token", token);
                    console.log('storageUser',user)
                    console.log('storagToken',token)
                    console.log('storageStaff',staff)
                    // redirects to products on succesful login
                    this.props.history.push('/products')
                })
            }
        }
        ).catch(e=>{
            console.log(e)
            // const error = Object.value(e)
            this.setState({error: e.message , showErr: true})
        })

    }

    usernameHandler = (e) => {
        e.preventDefault()
        this.setState({email: e.target.value})
    }

    passwordHandler = (e) => {
        e.preventDefault()
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <div>{this.state.showErr ? 
                <p className="error">  <strong>Error!</strong> <br />
                       {this.state.error}
                </p>: null }
                <div className='col-xs-12 login'>
                    <form onSubmit={this.submitHandler}>
                        <div className="row vertical-align">
                            <div className="col-xs-1">
                                
                            </div>
                        
                            <div className="col-xs-6 regform">
                                <h2>Login</h2>
                                <div className="form-group">
                                    <label>Username or Email</label>
                                    <input type='text'autoFocus required onChange={this.usernameHandler} value={this.state.email} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type='password' minLength='6' onChange={this.passwordHandler} value={this.state.password} />
                                </div>
                                <br />
                                
                                { !this.state.loader  ?
                        <div className="submit">
                                <button className="submitButton">Login</button>
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
                                    <p className="forgot">Forgot Password?</p>
                                    <Link to='/forgot-password'>
                                    <div className="submit" style={{color:'black'}}>
                                    <button className="btn submitButton">Reset </button>
                                </div>
                                </Link>
                                
                            </div>
                        </div>
                    </form>

                </div>

            </div>
        )
    }
}

export default Login