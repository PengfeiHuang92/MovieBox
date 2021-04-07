import React from 'react'
import { useState, useCallback, useRef } from 'react'
import Popup from './Popup'

const Movies = ({ movies, hasMore, setPageNumber }) => {
    const [movieURL, setMovieURL] = useState('');
    const [triggerBtn, setTriggerBtn] = useState(false);

    // UseRef  UseCallback
    const observer = useRef()
    const lastMovieRef = useCallback(node => {
        //disconnect current observer
        if (observer.current) observer.current.disconnect()

        //when the last movie shows on the screen
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore])


    const onClickFun = (id) => {
        setTriggerBtn(true)
        movieUrl(id)
    }

    //Getting Movie URL from MovieDB
    const movieUrl = async (id) => {
        const url = 'https://api.themoviedb.org/3/movie/' + id + '/videos?api_key=df5581abcc596f7cc9ede3b8ad4ff802&language=en-US';
        if (id) {
            try {
                const res = await fetch(url);
                const data = await res.json();
                console.log("popup", data.results);
                let hasURL = false;
                data.results.map((movie) => {
                    if ((movie.type.indexOf("Trailer") != -1 || movie.type === "Teaser") && !hasURL) {
                        setMovieURL('https://www.youtube.com/embed/' + movie.key);
                        hasURL = true;
                    }
                    return null
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div>
            {
                /* Mapping though the movies*/
                movies.filter(movie => movie.poster_path).map((movie, index) => {
                    if (hasMore) {
                        return <div className='card movie_card' key={movie.id} >
                            <img className="movie-image" src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.title} />
                            <button className="play_button" onClick={() => (onClickFun(movie.id))}>
                                Trailer
                            </button>
                            <div className="card-body">

                                <h5 className="card-title" ref={lastMovieRef}>{movie.title}</h5>
                                <span className="movie_info">{movie.release_date}</span>
                                <span className="movie_info float-right">Rate:<strong>{movie.vote_average}</strong></span>
                            </div>
                        </div>
                    } else {
                        return <div className='card movie_card' key={movie.id} >
                            <img className="movie-image" src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt={movie.title} />
                            <button className="play_button" onClick={() => (onClickFun(movie.id))}>
                                Trailer
                            </button>
                            <div className="card-body">

                                <h5 className="card-title">{movie.title}</h5>
                                <span className="movie_info">{movie.release_date}</span>
                                <span className="movie_info float-right">Rate:<strong>{movie.vote_average}</strong></span>
                            </div>
                        </div>
                    }
                }
                )
            }
            {/* Showing trailer
                trigger : boolean
                setTriggerBtn : function
                movieURL : string
            */}
            <Popup trigger={triggerBtn} setTriggerBtn={setTriggerBtn} movieURL={movieURL} setMovieURL={setMovieURL} >  </Popup>

        </div>
    )
}

export default Movies
