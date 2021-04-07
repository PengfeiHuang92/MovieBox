import { useEffect, useState } from 'react'
import axios from 'axios'
const apiKey = 'df5581abcc596f7cc9ede3b8ad4ff802';
const Popular_URL = "https://api.themoviedb.org/3/movie/popular";
const Search_URL = "https://api.themoviedb.org/3/search/movie";

export default function MovieControls(query, pageNumber, setPageNumber) {
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    //retrun popular movies
    let popul = {
        method: 'GET',
        url: Popular_URL,
        params: { api_key: apiKey, page: pageNumber },

    }
    //retrun movies based on query
    let search = {
        method: 'GET',
        url: Search_URL,
        params: { api_key: apiKey, query: query, page: pageNumber },
    }
    let state = {}

    //reset pagenumber and movies everytime query changes
    useEffect(() => {
        setMovies([])
        setPageNumber(1)
    }, [query])

    //show popular movies when query is empty
    if (query!=null) {
        state = search;
    } else {
        state = popul;
    }

    //pagination based on query and pageNumber
    useEffect(() => {

        axios(state).then(res => {
            setMovies(preMovies => {
                
                if (res.data.page <= res.data.total_pages) {
                    return [...preMovies, ...res.data.results]
                } else {
                    setHasMore(false)
                    return [...preMovies]
                }
            })
        })

    }, [query, pageNumber])

    
    return { movies, hasMore }
}
