const Search = ({ search, setSearch, getMovies }) => {
  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearch(e.currentTarget.value)
  }

  return (
    <form>
      <input
        placeholder="What movie are you looking for?"
        value={search.value}
        onChange={handleSearchChange}
      />
      <button type="submit" text="text" onClick={getMovies}>
        Search
      </button>
    </form>
  )
}
export default Search

// https://codepen.io/himalayasingh/pen/dqjLgO
