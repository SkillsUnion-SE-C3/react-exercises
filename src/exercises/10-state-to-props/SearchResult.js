const SearchResult = (props) => {


  const renderResults = () => {
    return props.content.replaceAll(props.searchQuery, `<span style="background: yellow; color: black;"><strong><i>${props.searchQuery}</i></strong></span>`)
  }

  return(
    <>
      <h3>Result</h3>
      <p 
        className="search-results" 
        dangerouslySetInnerHTML={{__html: renderResults()}}>
      </p>
    </>
  )
}

export default SearchResult
