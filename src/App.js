
import './App.css';
import { useState } from 'react'
import Header from './Components/Header.js';
import SearchBox from './Components/SearchBox.js';
import Movies from './Components/Movies.js';
import MovieControls from './Controls/MovieControls'
function App() {
 
  const [pageNumber,setPageNumber] = useState(1);
  const [query,setQuery] = useState('')
  const {movies,hasMore} = MovieControls(query,pageNumber,setPageNumber)
    return (

      <div className="container" >
        <Header />
        
        <SearchBox setQuery={setQuery} />
        {/* <Movies movies= {movies} setMovies= {setMovies}/> */}
        <Movies movies= {movies} hasMore={hasMore} setPageNumber={setPageNumber}/>
      </div>
    );
  }


export default App;