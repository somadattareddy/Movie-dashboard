import React from 'react'
import './Moviedisp1.css'
import plus from '../assets/add.svg'

const MovieDisp = (props) => {
    return (
        <div className='Display1' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + props.image})`
        }}>
            <div className='Topbar1'>
                <div className='MovieTitle1'>{props.title}</div>
                <div className='Rating'></div>
            </div>
            <div className='Bottombar1'>
                <div className='info1'>
                    <div className='EpisodeCount1'>{props.ep} Ep</div>
                    <div className='Genre1'>{props.genre}</div>
                </div>
                <div className='actions1'>
                    <button className='Add1' onClick={() => alert("add pressed")}>
                        <img src={plus} alt="" />
                    </button>
                    <button className='Watch1' onClick={() => alert("watch pressed")}>
                        <div className='buttontexty'>Watch</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieDisp