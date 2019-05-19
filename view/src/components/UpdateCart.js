import React from 'react'
import Modal from './UI/Modal'

const UpdateCart = (props) => {
    return (
        <div>
            <Modal  show={props.shows} clicked={props.clicked}>
            <div className='col-xs-12 login'>
                    <form onSubmit={props.submit}>
                        <div className="row vertical-align">
                            <div className="col-xs-1">
                            </div>
                        
                            <div className="col-xs-6 regform">
                                <h2>{props.title || 'Add To Cart'}</h2>
                                <hr />
                                <div className="form-group">
                                    <label>{props.label ||'Type in total quantity of product'}</label>
                                    <input onChange={props.input} name={props.name} type={props.inputType || 'number'} required value={props.val} autoFocus />
                                </div>
                                
                        <div className="submit">
                                <button className="submitButton">{props.submitButton || 'Add To Cart'}</button>
                        </div> 
                                
                            </div>
                        </div>
                    </form>

                </div>
            </Modal>
        </div>
    )
}

export default UpdateCart