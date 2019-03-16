import React from 'react'
import './loader.css'

const loader = (props) =>{
    return (
        <div>
            {props.show ?
                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div> : null}
        </div>
    )
}

export default loader