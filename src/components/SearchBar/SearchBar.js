import React from "react";
import './SearchBar.css'

import { GoSearch } from 'react-icons/go'
import { IconContext } from "react-icons";

function SearchBar ({ data }) {
    return (
        <>
            <div className="searchInput">
                <IconContext.Provider>
                <GoSearch />
                <input type="text" />
                </IconContext.Provider>
            </div>
            <div className="dataResult">

            </div>
        </>
    )
}

export default SearchBar