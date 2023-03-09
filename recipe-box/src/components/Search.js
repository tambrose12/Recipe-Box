
function Search({ handleSearchQuery }) {

    function handleSearch(e) {
        handleSearchQuery(e.target.value)
    }

    return (
        <div id="search">
            <div className="ui icon input">
            <input 
            onChange={handleSearch} 
            placeholder="Search Recipes..." 
            name="search" 
            type="text" />
            <i className ="search icon"></i>
            
            </div>
        </div>
    )
}

export default Search;