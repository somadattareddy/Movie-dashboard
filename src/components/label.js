import React from 'react'
import './label.css'
const Label = (props) => {
    return (
        <div className='label'>
            <img src={props.svg} alt="" />
            <div className='labeltext' style={{ color: props.color ? "#00B9AE" : "#F9F9F9" }}>{props.text}</div>
        </div>
    )
}

export default Label