import React from 'react'
import { useState } from 'react'
import Popup from './Popup'
// import { AiFillStar  } from 'react-icons/ai';

const Movies = ({ movies }) => {
    const [movieId, setMovieId] = useState('');
    const [movieURL, setMovieURL] = useState('');
    const [triggerBtn, setTriggerBtn] = useState(false);
     const onClickFun = (id) =>{
        setTriggerBtn(true)
        setMovieId(id)
        movieUrl(id)
    }

    const movieUrl = async (id)=>{
        const url = 'https://api.themoviedb.org/3/movie/'+id+'/videos?api_key=df5581abcc596f7cc9ede3b8ad4ff802&language=en-US';
        console.log("asdasd",id);
        if(id){
          try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("popup" ,data.results);
            data.results.map((movie)=>{
                if(movie.type === "Trailer"){
                    setMovieURL('http://www.youtube.com/embed/'+movie.key);
                }
            })
          }catch(error){
            console.log(error);
          }
        }
       
      }
    return (
        <div>
            {
                movies.filter(movie => movie.poster_path).map(movie => (
                    <div className='card movie_card' key={movie.id} >
                        <img className="movie-image" src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt="Card image cap" />
                        <button className="play_button" onClick={()=>onClickFun(movie.id)}></button>
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <span className="movie_info">{movie.release_date}</span>
                            {/* <span className="movie_info float-right"><AiFillStar/>{movie.vote_average}</span> */}
                        </div>
                        
                    </div>

                    
                )
                )
              
            }
            <Popup trigger={triggerBtn} setTriggerBtn={setTriggerBtn} movieURL = {movieURL} >
              
            </Popup>

        </div>
    )
}

export default Movies
