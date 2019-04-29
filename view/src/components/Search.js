import React from 'react'

const search = (props) => {
    return(
        <div className="">
            <form className="search" onSubmit={props.input}>
                <input id="search" value={props.value} onChange={props.input} type="text" placeholder="Search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}
export default search