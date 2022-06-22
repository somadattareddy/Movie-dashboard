import React from 'react'
import './MovieDisplay.css'
import plus from '../assets/add.svg'

const MovieDisplay = (props) => {
    return (
        <div className='Display' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`
        }}>
            <div className='Topbar'>
                <div className='MovieTitle'>{props.title}</div>
                <div className='Rating'></div>
            </div>
            <div className='Bottombar'>
                <div className='info'>
                    <div className='EpisodeCount'>{props.ep} Ep</div>
                    <div className='Genre'>{props.genre}</div>
                </div>
                <div className='actions'>
                    <button className='Add' onClick={() => alert("add pressed")}>
                        <img src={plus} alt="" />
                    </button>
                    <button className='Watch' onClick={() => alert("watch pressed")}>
                        <div className='buttontext'>Watch</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieDisplay