import './SearchBar.css'
import { GoSearch } from 'react-icons/go'
import { IconContext } from "react-icons"
import React, { useState } from 'react';

function SearchBar ({ data }) {

    const [inputSearch, setInputSearch]   = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setInputSearch(event.target.value)

        const newFilter = data.filter(value => {
            return value.title.includes(inputSearch)
        })

        setFilterSearch(newFilter)
    }

    return (
        <>
            <div className="searchInput">
                <IconContext.Provider value={{color: "#49708a", size: "30px"}}>
                    <GoSearch />
                <input value={inputSearch} onChange={handleFilter} type="text" 
                placeholder="Digite sua pesquisa..." />
                </IconContext.Provider>
            </div>

            {filterSearch !== 0 &&
            <div className="dataResult">
                {filterSearch.map(value => (
                    <div key={value.id} className="dataItem">
                        <IconContext.Provider value={{color: "#49708a", size: "22px"}}>
                            <GoSearch />
                        </IconContext.Provider>
                        <p>{value.title}</p>
                    </div>
                ))}
            </div>
            }
        </>
    )
}

export default SearchBar