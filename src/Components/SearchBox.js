import React from 'react'
const SearchBox = ({ setQuery }) => {
  
    return (
        <div >
            <form className="SearchBox">
                <input type="text" placeholder="Movie Name"  onChange={(e) => {setQuery(e.target.value)}} />
            </form>
        </div>
    )
}

export default SearchBox
