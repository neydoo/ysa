import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setAccess,setUser,setStaff } from "../action";
import Datetime from 'react-datetime';
import Loader from './UI/loader'
import NewCategory from './UpdateCart'


const user = sessionStorage.getItem("user")
const token = sessionStorage.getItem("token")
const staff = sessionStorage.getItem("staff")
 
class NewProduct extends Component{
    state = {
        name: "",
        formError: null,
        label: "",
        batch: "",
        expDate: "",
        sp: "",
        cp: "",
        variant: "",
        qty: "",
        category: "",
        showCategory: false,
        showSubcategory: false,
        subcategory: "",
        newSubcategory: "",
        newCategory: "",
        selectedCategory: "",
        selectedSubCategory: "",
        description:"",
        barcode: "",
        otherDesc: "",
        submitError: null,
        loader: false,
        initialLoader: true,
        disabled: false,
        categories: [],
        subcategories: [],
    }

   nameOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            name : e.target.value
        },()=>{
            this.labelPrintintHandler()
        })
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
        },()=>{
            this.labelPrintintHandler()
        })
    }
   otherDescOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            otherDesc : e.target.value
        },()=>{
            this.labelPrintintHandler()
        })
    }
    categoryOnChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        
        this.setState({
            category: e.target.value,
            subcategories: []
        },()=>{
            if(this.state.category !== 'Add new category' && this.state.category !== '--select category--'){
                this.fetchSubcategory()
                this.labelPrintintHandler()
            } else if (this.state.category === 'Add new category') {
                console.log('seen')
                this.setState({showCategory:true})
            } else if(this.state.category === '--select category--'){
                return null
            }
        })
    }

    fetchSubcategory = () => {
        this.setState({ selectedCategory: this.state.category }, () => {
            // check the categories array for the selected id which is used to search for the sub category in the db  
            const catToSearch = this.state.categories.filter(item => {     //returns a single array with the selected category details
                return item.category_name === this.state.category
            })
            const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjcyNDI1NX0.4-88vjegT9bit4CXxJNXUKSaDe-XXVLIId-4iNOQA28`
            const url = `/api/category/${catToSearch[0].id}`     //get the category_id 
            fetch(url, {                                     // fetch thte subcategory from the db using the category_id gotten earlier
                method: 'GET',
                withCredentials: true,
                credentials: 'include',
                headers: {
                    'Authorization': bearer,
                }
            }).then(res => res.json())
                .then(res => {
                    const subcategories = res[0].subcategory
                    console.log(res)
                    console.log(subcategories)
                    if (subcategories.length > 0) {
                        this.setState({ subcategories }, () => {
                            console.log(this.state.subcategories)
                        })
                    }
                })
            
        })
    }

   subcategoryOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           subcategory : e.target.value
        },()=>{
            if(this.state.selectedCategory === '' || this.state.category === '--select category--'){
                alert('Please select a category first')
            } else if (this.state.subcategory === 'Add new subcategory' && this.state.selectedCategory !== '') {
                this.setState({showSubcategory:true})
            } else if (this.state.subCategory !== '--select subcategory--' || this.state.subcategory !== 'Add new subcategory') {
                this.labelPrintintHandler();
            }
        })
    }
   variantOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           variant : e.target.value
        })
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
        this.setState({label:e.target.value})
    }
   newCategoryOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           newCategory : e.target.value
        })
       }
       
    categoryModalHandler = (e) => {
        e.preventDefault()
        this.state.showCategory ? this.setState({showCategory:false}) : this.setState({showCategory:true})
}
 
   newSubcategoryOnChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
           newSubcategory : e.target.value
        })
    }  
    
    subCategoryModalHandler = (e) => {
        e.preventDefault()
        this.state.showSubcategory ? this.setState({showSubcategory:false}) : this.setState({showSubcategory:true})
}

    labelPrintintHandler = () =>{
        const label = `${this.state.name} ${this.state.category} ${this.state.subcategory} ${this.state.description}`
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
    
saveCategoryHandler = (e)=>{
    e.preventDefault();
    if (this.state.newCategory !== '') {  // checks if input is empty
        this.setState({showCategory:false})
        const newData = new FormData()
        newData.append('newCategory', this.state.newCategory)
        fetch('/api/category',{             // saves it first to db
            method: 'POST',
            body: newData
        }).then(res=>{
            console.log(res)
            this.setState({ loader: false });
            return this.fetchCategory();
        })
    }
}

    saveSubcategoryHandler = (e) => {
        e.preventDefault();
        console.log(this.state.subcategories)
        let results = this.state.subcategories.filter(x => {
            console.log(x)
            return x.subcategory_name.toLowerCase().includes(this.state.newSubcategory)})
        // this.state.subcategories.map(subCat=>{
        //     console.log(subCat.name)
                console.log(results)
            if (results.length > 0) {
                alert('this subcategory already exists')
            } else if(this.state.newSubcategory !== '' && this.state.selectedCategory !== '' && results.length < 1){       //checks if a category has been selected, and if subcategory is empty
            console.log(results)    
            const data = new FormData()
            let id = ''
            const url = '/api/subcategory'
                
            //get selected category_id from categories array
            const categoryArray = this.state.categories.filter(category=>{      
                return category.category_name === this.state.selectedCategory
            })
            console.log(categoryArray[0].id)
            id = categoryArray[0].id
            data.append('subcategory_name',this.state.newSubcategory)
            data.append('category_id',id    )

            fetch( url, {
                method: 'POST',
                body: data
            }).then(res=>{
                this.setState({loader:false,showSubcategory:false})
                console.log(res)
                return this.fetchSubcategory()
            })
            
        }
        
    // })

    }
    
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({
            loader:true,
        })
        const data = new FormData()
        // const url = '/api/product'

        data.append('name', this.state.name)
        data.append('batch',this.state.batch)
        data.append('description',this.state.description)
        data.append('otherDesc',this.state.otherDesc)
        data.append('barcode',this.state.barcode)
        data.append('label',this.state.label)
        data.append('costPrice',this.state.cp)
        data.append('sellingPrice',this.state.sp)
        data.append('quantity',this.state.qty)
        data.append('variants',this.state.variant)
        data.append('expDate',this.state.expDate)
        data.append('category_name',this.state.category)
        data.append('subcategory', this.state.subcategory)

        
    }
    
    componentWillMount(){
        this.fetchCategory()
    }

    fetchCategory = () => {
        const bearer = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU1MjcyNDI1NX0.4-88vjegT9bit4CXxJNXUKSaDe-XXVLIId-4iNOQA28`
        fetch('/api/category',{         //fetches categories from the db so the user can select from already saved categories
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            headers: {
                'Authorization': bearer,
                // 'Content-Type': 'application/json'
            }
        }).then(res => {
            if (!res.ok && res.status !== 400) {
            console.log (res)
           throw Error(res.statusText)

        } 
          res.json().then(res => {
              const categories = res.category
              this.setState({categories})
              categories.map(category => {
                  this.setState({ category: category.category_name })  
                  return category.id
            })
              this.setState({ categories, initialLoader: false })              // fills the array with categories from the db and stops the loader
              console.log(this.state.category)
          })
        }).catch(e=>{
            console.log(e)
            // const error = Object.value(e)
            this.setState({error: e.message , showErr: true, initialLoader:false})
        })
    }

    render() {
        let expD = Datetime.moment().subtract( 1, 'day' );
        let defaultDate = Datetime.moment();
        let expvalid = function( current ){
            return current.isAfter( expD );
        };
        let category = this.state.category
        let subcategory = this.state.subcategory
        if (this.state.category === 'Add new category') {
            subcategory = this.state.newSubcategory
            category = this.state.newCategory
        }
        let label = `${this.state.name} ${category} ${subcategory} ${this.state.description}`
        return (
            <div>
                { this.state.initialLoader ? <Loader show={this.state.initialLoader} /> : 
                <div>{this.state.showErr ? 
                    <p className="error">  <strong>Error!</strong> <br />
                        Seems there was an error connecting to the server <br />
                       {this.state.error}
                    </p> :
                    <div>
                         { this.state.formError ?  <p className="error">Please check that all fields have been correctly filled</p> : null}
                <form id='reg' onSubmit={this.onSubmitHandler} >
                    <div className="row regform">
                        <div className="col-sm-12">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Barcode</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={this.barcodeOnChangeHandler} type="text" placeholder="Barcode" value={this.state.barcode} />
                                </div>
                                </div>

                                {console.log(this.state.name + " " + this.state.category + " " + this.state.description)}
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input required className="form-control" disabled={this.state.disabled} onChange={ this.nameOnChangeHandler} type="text" placeholder="Product Name" value={this.state.name} />
                                </div>
                                </div>

                                {/* <div className="col-sm-12"> */}
                                    <div className="col-sm-6">
                                         <div className="form-group category-div">
                                            <label>Category</label>
                                    <select disabled={this.state.disabled} onChange={ this.categoryOnChangeHandler}>
                                                <option>--select category--</option>
                                        {this.state.categories.map(category => {
                                            return(
                                                <option key={category.id}>{category.category_name}</option>
                                            )
                                        })}
                                       { console.log(this.state.subcategories)}
                                                    <option>Add new category</option>
                                                </select>
                                        </div>
                                    </div>


                                    <div className="col-sm-6">
                                        <div className="form-group category-div">
                                            <label>Sub category</label>
                                                <select   disabled={this.state.disabled} onChange={this.subcategoryOnChangeHandler} >
                                                <option>--select subcategory--</option>
                                                    {this.state.subcategories.map(subcategory => {
                                                        return(
                                                            <option key={subcategory.id}>{subcategory.subcategory_name}</option>
                                                        )
                                                    })}
                                                    <option>Add new subcategory</option>
                                                </select>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <input required disabled={this.state.disabled} onChange={ this.descOnChangeHandler} type="text" placeholder="Description" value={this.state.description} />
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Other Description</label>
                                            <input className="form-control" disabled={this.state.disabled} onChange={ this.otherDescOnChangeHandler} type="text" placeholder="Other Desc" value={this.state.otherDescription} />
                                        </div>
                                    </div>
                            {/* {this.state.category === 'Add new category' ?
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add New Category </label>
                                            <input type="text" className="form-control" onChange={ this.newCategoryOnChangeHandler} required disabled={this.state.disabled} value={this.state.newCategory}  />
                                        </div>
                                        </div>: null
}
                                    {this.state.subcategory === 'Add new subcategory' ?
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Add New sub-category </label>
                                            <input type="text" className="form-control" onChange={ this.newSubcategoryOnChangeHandler} disabled={this.state.disabled} value={this.state.newSubcategory}  />
                                        </div>
                                    </div> 
                                   : null } */}
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Variants</label>
                                            <input required className="form-control" disabled={this.state.disabled} onChange={ this.variantOnChangeHandler} type="text" placeholder="Variant" value={this.state.variant} />
                                        </div>
                            </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Label Print</label>
                                            <input required className="form-control" disabled={this.state.disabled} onChange={this.labelOnChangeHandler} type="text" value={this.state.label} />
                                        </div>
                            </div>
                            
                                <div className="col-sm-12">
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                            </div>
                                <div className="col-sm-12">
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                            </div>
                                <div className="col-sm-12">
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        
                                        </div>
                                    </div>
                            </div>
                            
                                

                            <div className="col-md-12">
                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Batch</label>
                                            <Datetime timeFormat={false} defaultValue={defaultDate}   />
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-xs-12 col-lg-2 col-sm-2">
                                        <div className="form-group">
                                            <label>Exp Date</label>
                                            
                                            <Datetime timeFormat={false} isValidDate={expvalid} defaultValue={defaultDate}   />
                                        </div>
                                </div>
                                
                                    
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
                            <NewCategory
                                title='Add a new Category'
                                inputType='text'
                                label='Type in new category'
                                shows={this.state.showCategory}
                                val={this.state.newCategory}
                                input={this.newCategoryOnChangeHandler}
                                clicked={this.categoryModalHandler}
                                submit={this.saveCategoryHandler}
                                submitButton='Save'

                            /> 
                        <NewCategory 
                                clicked={this.subCategoryModalHandler}
                                title='Add a new sub-category'
                                label='Type in the new sub-category'
                                inputType='text'
                                val={this.state.newSubcategory}
                                shows={this.state.showSubcategory}
                                input={this.newSubcategoryOnChangeHandler}
                                submit={this.saveSubcategoryHandler}
                                submitButton='Save'
                        /> 
                                </div>
                    }
            </div>
                }
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

export default connect(mapStateToProps,mapDispatchToProps)(NewProduct)