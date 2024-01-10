import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import "./search.css"
import { useEffect, useState } from "react"
export default function Serach({ handleSearch }) {
    const [search, setSearch] = useState("")
    const [searching, setSearching] = useState(false)

    function handleChangeText(e) {
        setSearch(e.target.value)
    }

    function handleSearchBtn() {
        if (search.length > 0) {
            setSearching(true)
            handleSearch(search.toLowerCase())
        }
    }

    function handleClearBtn() {
        setSearching(false)
        setSearch("")
        handleSearch("")
    }

    useEffect(() => {
        if (searching && search.length === 0) {
            setSearching(false)
            handleSearch("")
        }
    }, [search, searching])

    return (
        <div className="search">
            <input className="search_text" autoComplete="none" type="text" value={search} placeholder="Pesquisar" onChange={e => handleChangeText(e)} />
            {!searching ?
                <button className="search_button" onClick={handleSearchBtn}>
                    <AiOutlineSearch className="search_icon" size={20} />
                </button> :
                <button className="search_button" onClick={handleClearBtn}>
                    <AiOutlineClose className="search_icon" size={20} />
                </button>
            }
        </div>
    )
}