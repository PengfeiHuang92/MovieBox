
import './App.css';
import { useState, useEffect } from 'react'
import Header from './Components/Header.js';
import SearchBox from './Components/SearchBox.js';
import Movies from './Components/Movies.js';
function App() {
 
  const [movies, setMovies] = useState([]);
  const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=df5581abcc596f7cc9ede3b8ad4ff802&language=en-US&page=1'
  const [btnClicked, setBtnClicked] = useState(false);
  //getting Movie List
  
  const getMovies = async (url) =>{
    try{
      setBtnClicked(true);
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }catch(error){
      console.log(error);
    }
  }
 
  const SearchBtn =(query)=>{
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=df5581abcc596f7cc9ede3b8ad4ff802&query='+query;
    if(query){
      getMovies(url);
    }
   
  }
  useEffect(() => {
    if(!btnClicked){
      getMovies(urlPopular)
    }else{
      console.log("aaaaa");
    }
       
  });
    return (

      <div className="container" >
        <Header />
        <SearchBox btnOnClick={SearchBtn}/>
        <Movies movies= {movies} />
      </div>
    );
  }


export default App;