import React from 'react'
import './LeftBar.css'
import Home from './assets/Home.svg'
import Discover from './assets/Discover.svg'
import Award from './assets/Award.svg'
import Celebrities from './assets/Celebrities.svg'
import Recent from './assets/Recent.svg'
import Top from './assets/Top.svg'
import Downloaded from './assets/Downloaded.svg'
import Playlists from './assets/Playlists.svg'
import Watchlist from './assets/Watchlist.svg'
import Completed from './assets/Completed.svg'
import Log from './assets/Log.svg'
import Settings from './assets/Settings.svg'
import Label from './components/label'

const LeftBar = () => {
    return (
        <div className='Leftbar'>
            <div className='Title'>Dashboard</div>
            <div className='Menu'>
                <div className='menutitle'>Menu</div>
                <Label svg={Home} text="Home" color="#00B9AE" />
                <Label svg={Discover} text="Discover" />
                <Label svg={Award} text="Awards" />
                <Label svg={Celebrities} text="Celebrities" />
            </div>
            <div className='Library'>
                <div className='menutitle'>Library</div>
                <Label svg={Recent} text="Recent" />
                <Label svg={Top} text="Top Rated" />
                <Label svg={Downloaded} text="Downloaded" />
                <Label svg={Playlists} text="Playlists" />
                <Label svg={Watchlist} text="Watchlist" />
                <Label svg={Completed} text="Completed" />
            </div>
            <div className='General'>
                <div className='menutitle'>General</div>
                <Label svg={Settings} text="Settings" />
                <Label svg={Log} text="Log Out" />
            </div>
        </div>
    )
}

export default LeftBar