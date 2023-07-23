import React, { useState } from "react";

const Search = ({ setSearchTitle  }) => {
    const handleInputChange = (event) => {
        setSearchTitle(event.target.value);
      };
    return(
        <>
            <input type="text" onChange={handleInputChange} />
        </>
    )
}

export default Search;