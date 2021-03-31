import React from 'react'
import { useState } from 'react';
const SearchBox = ({ btnOnClick }) => {
    const [query, setQuery] = useState('');

    const searchBtnFun = (e) => {
        e.preventDefault();

        btnOnClick(query);
    }
    return (
        <div >
            <form className="SearchBox">
                <input type="text" placeholder="Movie Name" value={query} onChange={(e) => setQuery(e.target.value)} />

                <button onClick={searchBtnFun} type="submit">
                    Search
                </button>
            </form>


        </div>
    )
}

export default SearchBox
