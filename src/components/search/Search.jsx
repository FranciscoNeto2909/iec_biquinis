import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import "./search.css"
import { useState } from "react"
export default function Serach({ handleSearch }) {
    const [search, setSearch] = useState("")
    const [searching, setSearching] = useState(false)

    function handleChangeText(e) {
        setSearch(e.target.value)
    }

    function handleSearchBtn() {
        setSearching(true)
        handleSearch(search.toLowerCase())
    }

    function handleClearBtn() {
        setSearching(false)
        setSearch("")
        handleSearch("")
    }

    function handleLengthZero(e) {
        if (searching && search.length === 1 && e.key === "Backspace") {
            setSearching(false)
            handleSearch("")
        }
    }

    return (
        <div className="search">
            <input className="search_text" onKeyDown={e => handleLengthZero(e)} autoComplete="none" type="text" value={search} placeholder="Pesquisar" onChange={e => handleChangeText(e)} />

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