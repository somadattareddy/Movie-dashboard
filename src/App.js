import './App.css';
import LeftBar from './LeftBar';
import RightBar from './RightBar';
import Search from './assets/Search.svg'
import Filter from './assets/Filter.svg'
import MovieDisplay from './components/MovieDisplay';
import plus from './assets/add.svg'


function App() {
  return (
    <div className="App">
      <LeftBar />
      <div className='Main'>
        <div className='Navbar'>
          <div className='NavElements'>
            <div className='NavItem'>Movies</div>
            <div className='NavItem'>TV Shows</div>
            <div className='NavItem'>Anime</div>
          </div>
          <div className='Searchbar'>
            <img src={Search} alt='' />
            <input type="text" placeholder='Search' />
            <img src={Filter} alt='' />
          </div>
        </div>

        <div className='MainDisplay'>
          <div className='slider' style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + '/Picture4.png'})`
          }}>
            <div className='namey'>The Crown</div>
            <div className='bottomActions'>
              <button className='button1'>
                <img src={plus} alt="" />
                <div className='buttontext1'>Watchlist</div>
              </button>
              <button className='button2'>
                <div className='buttontext2'>Watch Now</div>
              </button>
            </div>
          </div>
        </div>
        <div className='Title'>Popular on TinyMoviez</div>
        <div className='Popular'>
          <MovieDisplay image='/Picture1.png' title="Loki" ep='6' genre='Superhero' />
          <MovieDisplay image='/Picture2.png' title="Chernobyl" ep='5' genre='Mini Series' />
          <MovieDisplay image='/Picture3.png' title="Rick and Morty" ep='49' genre='Fantasy' />
          <MovieDisplay image='/Picture1.png' title="Loki" ep='6' genre='Superhero' />
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default App;
