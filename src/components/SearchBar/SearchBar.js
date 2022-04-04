import React from "react";
import './SearchBar.css'
import { GoSearch } from 'react-icons/go'
import { IconContext } from "react-icons";

function SearchBar ({ data }) {
    return (
        <>
            <div className="searchInput">
                <IconContext.Provider value={{color: "#49708a"}}>
                <GoSearch />
                <input type="text" placeholder="Digite sua pesquisa..." />
                </IconContext.Provider>
            </div>
            <div className="dataResult">

            </div>
        </>
    )
}

export default SearchBar