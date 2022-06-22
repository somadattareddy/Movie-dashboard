import React from 'react'
import './RightBar.css'
import Notification from './assets/Notification.svg'
import Vector from './assets/Vector.svg'
import Profile from './assets/Profile.svg'
import Wanda from './assets/Wanda.svg'
import Progress from './assets/Progress.svg'

import Exbar from './components/Exbar'
import MovieDisp from './components/Moviedisp1'
import Blurr from './components/Blurr'

const RightBar = () => {
    return (
        <div className='Rightbar'>
            <div className='mainbar'>
                <button className='notif'>
                    <img src={Notification} alt="" />
                </button>
                <div className='user'>
                    <div className='name'>Samantha</div>
                    <img src={Vector} alt="" />
                    <div className='avatar'>
                        <img src={Profile} alt="" />
                    </div>
                </div>
            </div>
            <Exbar name="Continue" />
            <div className='watchbox'>
                <div className='watchtop'>
                    <img src={Wanda} alt="" />
                    <div className='watchinfo'>
                        <div className='watchtitle'>WandaVision</div>
                        <div className='epinfo'>1 Episode left</div>
                        <img src={Progress} alt="" />
                    </div>
                </div>
                <div className='actionsy'>
                    <button className='drop' onClick={() => alert("add pressed")}>
                        <div className='buttontexta'>Drop</div>
                    </button>
                    <button className='Watch1' onClick={() => alert("watch pressed")}>
                        <div className='buttontextw'>Watch</div>
                    </button>
                </div>
            </div>
            <Exbar name="Top Rated" />
            <MovieDisp title="Supernatural" ep="320" genre="Horror, Fantasy" image='./picture5.png' />
            <Exbar name="Genres" />
            <Blurr name="Drama" pic='./picture6.png' />
            <Blurr name="Sitcom" pic='./Picture7.png' />
        </div>
    )
}

export default RightBar