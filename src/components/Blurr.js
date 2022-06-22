import React from 'react'
import './Blurr.css'

const Blurr = (props) => {
    return (
        <div className='blurgen' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.pic})`
        }}>
            <div className='texty'>
                {props.name}
            </div>
        </div>
    )
}

export default Blurr