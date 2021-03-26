import React from 'react'
// import { AiFillStar  } from 'react-icons/ai';

const Movies = ({ movies }) => {
    return (
        <div>
            {
                movies.filter(movie => movie.poster_path).map(movie => (
                    <div className='card movie_card' key={movie.id} >
                        <img className="movie-image" src={'https://image.tmdb.org/t/p/original/' + movie.poster_path} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <span className="movie_info">{movie.release_date}</span>
                            {/* <span className="movie_info float-right"><AiFillStar/>{movie.vote_average}</span> */}
                        </div>
                        
                    </div>

                    
                )
                )
              
            }
        </div>
    )
}

export default Movies
