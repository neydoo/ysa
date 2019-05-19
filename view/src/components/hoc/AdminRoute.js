import React,{Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AdminLogin from '../AdminLogin';

const admin = sessionStorage.getItem("admin")

class AdminRoute extends Component {
  state = {
    showlogin: false,
    email: '',
    password:'',
    loader: false,
    showErr:false,
    error:'',
    admin:false,
    
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.setState({ loader: true, disabled: true, showErr: false, })

    const data = new FormData()
    data.append('email', this.state.email)
    data.append('password', this.state.password)
    fetch('/api/auth/login', {
      method: 'POST',
      body: data
    }).then(res => {
      this.setState({ loader: false, disabled: false })
      console.log(res)
      if (!res.ok && res.status !== 400) {
        console.log(res)
        throw Error(res.statusText)

      } else if (res.status === 400) {
        res.json().then(res => {
          console.log(res.message)
          const errorMsg = Object.values(res.message)
          // displays errors depending on what the error is
          if (errorMsg[0] === 'username') {
            this.setState({ error: ' Invallid Username/Password', showErr: true })
          } else if (errorMsg[0] === 'email') {
            this.setState({ error: ' Invallid Email/Password', showErr: true })
          } else if (errorMsg[0] === 'password') {
            this.setState({ error: ' Invallid Password', showErr: true })
          }
        })
      } else {
        res.json().then(res => {
          console.log(res.user[0].staff)
          const staff = res.user[0].staff
          const user = res.user[0]
          const token = res.token.token
          //save to seession 
          if (res.user[0].staff.role === 'admin') {
            sessionStorage.setItem("admin", true);
          }
          sessionStorage.setItem("staff", JSON.stringify(staff));
          sessionStorage.setItem("user", JSON.stringify(user));
          sessionStorage.setItem("accessId", staff.id);
          sessionStorage.setItem("admin", true);
          console.log('storageUser', user)
          console.log('storageToken', token)
          console.log('storageStaff', staff)
          this.setState({admin:true, showlogin:false})
        })
      }
    }
    ).catch(e => {
      console.log(e)
      this.setState({ error: e.message, showErr: true })
    })

  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.admin !== this.state.admin
  }
    render() {
        const Component = this.props.component;
    return (<Route {...this.rest} render={() => (
        admin 
          ? <Component {...this.props} />
            : <AdminLogin
          show={this.state.showlogin}
          password={this.state.password}
          email={this.state.email}
          loader={this.state.loader}
          disabled={this.state.disabled}
          input={this.handleChange}
          submit={this.submitHandler}
          clicked={this.handleClick}
          showErr={this.state.showErr}
          error={this.state.error}
          
        />
      )} />)
};
};

  
export default AdminRoute;