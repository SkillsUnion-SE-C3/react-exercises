const TextInput = (props) => {

  const handleChange = (e) => {
  }
  
  const handleInput = (e) => {
  }

  return(
    <>
    <h3>Search form </h3>
    <div className="flex">
      <input placeholder={props.searchQuery} onChange={handleChange}/>
      <textarea onInput={handleInput} rows={7} columns={20} placeholder={props.content}/>
    </div>
    </>
  )
}

export default TextInput
