import React from 'react'

const search = () => {
    return(
        <div className="">
            <form className="search">
                <input id="search" type="text" placeholder="Search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>
    )
}
export default search