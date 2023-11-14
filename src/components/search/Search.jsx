import "search.css"

export default function Serach({handleSearch, search}) {
    return (
        <div>
            <input type="text" value={search} placeholder="Pesquisar" onChange={e => handleSearch(e.target.value)} />
        </div>
    )
}