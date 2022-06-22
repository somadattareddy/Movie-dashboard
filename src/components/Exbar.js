import React from 'react'
import left from '../assets/left.svg'
import './Exbar.css'
import right1 from '../assets/right1.svg'
import right2 from '../assets/right2.svg'
const Exbar = (props) => {
    return (
        <div className='exbar'>
            <div className='barname'>{props.name}</div>
            <img src={left} alt="" />
            <div style={{ marginRight: 21 }}></div>
            <img src={right1} alt="" />
            <div className='extext'>See More</div>
            <img src={right2} alt="" />
        </div>
    )
}

export default Exbar