import './SearchBar.css'
import { GoSearch } from 'react-icons/go'
import { IconContext } from "react-icons"
import { AiOutlineClose } from 'react-icons/ai'
import React, { useEffect, useState } from 'react';

function SearchBar ({ data }) {

    const [inputSearch, setInputSearch]   = useState("")
    const [filterSearch, setFilterSearch] = useState([])

    const handleFilter = (event) => {
        setInputSearch(event.target.value)

        const newFilter = data.filter(value => {
            return value.title.toLowerCase().includes(inputSearch.toLocaleLowerCase())
        })

        setFilterSearch(newFilter)
    }

    useEffect(() => {
        if(inputSearch === "") {
            setFilterSearch([])
        }
    }, [inputSearch])

    function handleClickAutoComplete(value) {
        setInputSearch(value.title)
        setFilterSearch([])
    }

    function clearText() {
        setInputSearch("")
        setFilterSearch([])
    }

    return (
        <>
            <div className="searchInput">
                <IconContext.Provider value={{color: "#49708a", size: "30px"}}>
                    <GoSearch />
                <input value={inputSearch} onChange={handleFilter} type="text" 
                placeholder="Digite sua pesquisa..." />

                {inputSearch !== "" ? <AiOutlineClose onClick={clearText} /> : ""}
                </IconContext.Provider>
            </div>

            {filterSearch !== 0 &&
            <div className="dataResult">
                {filterSearch.map(value => (
                    <div key={value.id} className="dataItem" onClick={() =>
                    handleClickAutoComplete(value)}>
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