import React from 'react'
const SearchBox = ({ setQuery }) => {
  
    return (
        <div className="SearchBox">
           
                <input type="text" placeholder="Movie Name"  onChange={(e) => {setQuery(e.target.value)}} />
     
        </div>
    )
}

export default SearchBox
