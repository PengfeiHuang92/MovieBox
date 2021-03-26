
import './App.css';
import { useState } from 'react'
import Header from './Components/Header.js';
import SearchBox from './Components/SearchBox.js';
import Movies from './Components/Movies.js';
function App() {
 
  const [movies, setMovies] = useState([]);

  const SearchBtn = async (query)=>{
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=df5581abcc596f7cc9ede3b8ad4ff802&query='+query;
    if(query){
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
      }catch(error){
        console.log(error);
      }
    }
   
  }
  return (
    <div className="container">
      <Header />
      <SearchBox btnOnClick={SearchBtn}/>
      <Movies movies= {movies} />
    </div>
  );
}

export default App;