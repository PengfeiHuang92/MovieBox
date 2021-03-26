import React from 'react'
import {useState} from 'react';
const SearchBox = ({btnOnClick}) => {
    const [query, setQuery] = useState('');

    const searchBtnFun = (e)=>{
        e.preventDefault();

        btnOnClick(query);
    }
    return (
        <div className="SearchBox">
            <input type="text" placeholder="Movie Name" value={query} onChange={(e) => setQuery(e.target.value)}/>
        
                <button className="btn btn-secondary" type="button" onClick={searchBtnFun}>
                    Search
                </button>
        
        </div>
    )
}

export default SearchBox
