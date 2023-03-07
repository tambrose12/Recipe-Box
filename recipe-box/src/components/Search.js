
function Search ({handleSearchQuery}) {

    function handleSearch(e) {
        handleSearchQuery(e.target.value)
    }

    return ( 
        <div>
            <input onChange={handleSearch} type ="text" name="search" placeholder="Search Recipes..." ></input>
        </div>
    )
}

export default Search;