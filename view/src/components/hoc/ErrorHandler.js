import React,{ Component } from 'react';

// import Modal from '../components/UI/modal';
// import Aux from './auxil';
const errorHandler = (WrappedComponent,axios) => {
    return class extends Component {
        state ={
            error:null
        }
        componentWillMount() {
            this.reqInterceptor= axios.interceptors.request.use(req => {
                this.setState({
                    error: null
                });
                return req
            });
               this.resInterceptor=  axios.interceptors.response.use(res=> res, error => {
                    this.setState({
                        error: error
                    });
                });
        }
        componentWillUnmount() {
            axios.inerceptor.request.eject(this.reqInterceptor);
            axios.inerceptor.response.eject(this.resInterceptor);
        }

        errorModalHandler = () => {
            this.setState({
                error:null
            })
        }

        render() {
            return (
                <div>
                    {/* <Modal show={this.state.error} clicked={this.errorModalHandler}>  */}
                         {this.state.error ? alert( this.state.error.message):null }
                {/* </Modal> */}
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}

export default errorHandler;