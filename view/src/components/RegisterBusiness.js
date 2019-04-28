import React,{Component} from 'react'

class RegisterBusiness extends Component {

    state = {
        name: '',
        email: '',
        tel: '',
        address: '',
        logo: null,
        error: false,
        loader: false,
        disabled: false,
        business: null,
    }

    nameOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
        name : e.target.value
        })
    }
    emailOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
        email : e.target.value
        })
    }
    telOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
        tel : e.target.value
        })
    }
    addressOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
        address : e.target.value
        })
    }
    logoOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
        logo : e.target.files[0]
        })
        console.log(e.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        // validate user's input then post to back end if suucessful
        if (this.state.name === '' || this.state.tel === '' || this.state.email === '' || this.state.address === '' || this.state.logo === null || isNaN(this.state.tel)) {
            this.setState({
                error:true
            })
        } else {
            this.setState({
                error:false,
                loader: true,
                disabled: true,
            })
            console.log(this.state.error)
            const data = new FormData()
            const url = '/api/business'
    
            data.append('logo',this.state.logo)
            data.append('name',this.state.name)
            data.append('email',this.state.email)
            data.append('tel',this.state.tel)
            data.append('address', this.state.address)
            fetch(url, {
                method: 'POST',
                body: data
            }).then(res => {
                res.json()
                this.setState({
                    loader: false,
                    disabled: false,
                })
            })
                .then(res => {
                    this.setState({
                        business: res
                    })
                })
            .catch(err => console.log(err))
                .then(res => {
                    res.json()
                    this.setState({
                        loader: false,
                        disabled: false,
                    })
                })
                .then(res => {
                    console.log('res',res)
                })
    
            
        }
}


    render(){
        return(
            <div>
                <p>Register Business</p>
                {this.state.error ? <p className="error">There was an error. Please ensure that all fields are correctly filled</p> : null}
                
                <form onSubmit={this.onSubmitHandler}>
                    <div className="row regform">
                        <div className="col-xs-8">
                            <div className="form-group">
                                <label>Business Name</label>
                                <input onChange={this.nameOnChangeHandler} type="text" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input onChange={this.emailOnChangeHandler} type="text" />
                            </div>

                            <div className="form-group">
                                <label>Telephone</label>
                                <input onChange={this.telOnChangeHandler} type="text" />
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input onChange={this.addressOnChangeHandler} type="text" />
                            </div>
                                
                            <div className="row logoDiv">
                                    <label>Logo</label>
                                <div className="form-group uploadDiv">
                                <div className="form-group col-xs-6">
                                    <div>
                                        <input className="fileButton" onChange={this.logoOnChangeHandler} accept="image/*" type="file" />
                                        <span> Choose Logo</span>
                                </div>
                                </div>
                                <div className="form-group path col-xs-6">
                                    <p className=""><em>{this.state.logo}</em></p>
                                </div>
                            </div>
                            </div>
                            <div className="submit">
                                <button className="submitButton">Register</button>
                        </div>
                        </div>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default RegisterBusiness