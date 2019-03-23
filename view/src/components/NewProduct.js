import React, { Component } from 'react'
import { connect } from "react-redux";
import { setAccess } from "../action";
import { setUser } from "../action";
import { setStaff } from "../action";
import { bindActionCreators } from 'redux';
import Datetime from 'react-datetime';
 
class RegisterStaff extends Component{
    state = {
        name: '',
        formError: null,
        label: '',
        batch: '',
        expDate: '',
        sp: '',
        cp: '',
        variant: '',
        qty: '',
        category: '',
        description:'',
        barcode: '',
        otherDesc: '',
        submitError: null,
        loader: false,
        disabled: false,
    }

   nameOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           name : e.target.value
        })
        this.labelPrintintHandler()
    }
    barcodeOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           barcode : e.target.value
        })
    }
   cpOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           cp : e.target.value
        })
    }
   spOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           sp : e.target.value
        })
    }
   descOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           description : e.target.value
        })
        this.labelPrintintHandler()
    }
   otherDescOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           otherDesc : e.target.value
        })
        this.labelPrintintHandler()
    }
   categoryOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           category : e.target.value
        })
        this.labelPrintintHandler()
    }
   variantOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           variant : e.target.value
        })
        this.labelPrintintHandler()
    }
   qtyOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           qty : e.target.value
        })
    }
   expDateOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           expDate : e.target.value
        })
    }
   batchOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           batch : e.target.value
        })
    }
   labelOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           label : e.target.value
        })
    }

    labelPrintintHandler = () =>{
        let label = `${this.state.category} ${this.state.name} ${this.state.description} ${this.state.otherDesc} ${this.state.variant}`
        this.setState({label})

    }
    handleDayChange = (selectedDay, modifiers, dayPickerInput)=> {
        const input = dayPickerInput.getInput();
        this.setState({
          selectedDay,
          isEmpty: !input.value.trim(),
          isDisabled: modifiers.disabled === true,
        });
      }

    render() {
        let date = new Date()
        let maxYear = Datetime.moment().subtract( 16, 'year' );
        let expD = Datetime.moment().subtract( 1, 'day' );
        let defaultDate = Datetime.moment();
        let valid = function( current ){
            return current.isBefore( maxYear );
        };
        let expvalid = function( current ){
            return current.isAfter( expD );
        };
        return (
                <div>
                         { this.state.formError ?  <p className="error">Please check that all fields have been correctly filled</p> : null}
                <form id='reg' onSubmit={this.handleSubmit} >
                    <div className="row regform">
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Barcode</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.barcodeOnChangeHandler} type="text" placeholder="Barcode" value={this.state.barcode} />
                                </div>

                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.nameOnChangeHandler} type="text" placeholder="Product Name" value={this.state.name} />
                                </div>
                                
                                <div className="form-group">
                                    <label>Description</label>
                                    <input required disabled={this.state.disabled} onChange={this.descOnChangeHandler} type="text" placeholder="Description" value={this.state.description} />
                                </div>

                            </div>
                                
                            <div className="col-sm-6">

                                <div className="form-group">
                                    <label>Category</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.categoryOnChangeHandler} type="text" placeholder="Category" value={this.state.category} />
                                </div>

                                <div className="form-group">
                                    <label>Other Description</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.otherDescOnChangeHandler} type="text" placeholder="Other Desc" value={this.state.otherDescription} />
                                </div>

                                <div className="form-group">
                                    <label>Variants</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.variantOnChangeHandler} type="text" placeholder="Variant" value={this.state.variant} />
                                </div>
                            
                            </div>

                            {/* <div className="col-md-12"> */}
                                <div className="form-group">
                                    <label>Label Print</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.labelOnChangeHandler} type="text" value={this.state.label} />
                                </div>
                            {/* </div> */}

                            <div className="col-md-12">
                                {/* <div className="row"> */}
                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Batch</label>
                                            <Datetime timeFormat={false} defaultValue={defaultDate}   />
                                            
                                            {/* <input required className="form-control" disabled={this.state.disabled} onChange={this.batchOnChangeHandler} type="text" placeholder="Batch No" value={this.state.batch} /> */}
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Exp Date</label>
                                            
                                            <Datetime timeFormat={false} isValidDate={expvalid} defaultValue={defaultDate}   />
                                            {/* <input required className="form-control" disabled={this.state.disabled} onChange={this.expDateOnChangeHandler} name="date" type="text" placeholder="MM/DD/YYYY" value={this.state.expDate} /> */}
                                        </div>
                                </div>
                                
                                    {/* <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Exp Date</label>
                                            <Datetime timeFormat={false} isValidDate={valid} defaultValue={defaultDate}   />
                                            
                                        </div>
                                    </div> */}

                                    
                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Cost Price</label>
                                            <input required className="form-control" disabled={this.state.disabled} onChange={this.cpOnChangeHandler} type="number" placeholder="Cost Price" value={this.state.cp} />
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Selling Price</label>
                                            <input required className="form-control" disabled={this.state.disabled} onChange={this.spOnChangeHandler} type="number" placeholder="Selling Price" value={this.state.sp} />
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Qty</label>
                                            <input required className="form-control" disabled={this.state.disabled} onChange={this.qtyOnChangeHandler} type="number" placeholder="Qty"  value={this.state.qty} />
                                        </div>
                                    </div>
                                {/* </div> */}

                            </div>
                        </div>
                        { !this.state.loader  ?
                        <div className="submit">
                                <button className="submitButton">Save</button>
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
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user,
        token: state.access,
        staff: state.staff
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({setUser,setAccess,setStaff},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterStaff)