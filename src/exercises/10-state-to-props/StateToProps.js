import TextInput from "./TextInput"
import SearchResult from "./SearchResult"
import { useState } from 'react'

const StateToProps = () => {

  const [searchQuery, setSearchQuery] = useState("dog");
  const [content, setContent] = useState("The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?");
  
  return(
    <div className="exercise tenth">
      <h2>State to props and lifting state</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>This exercise will allow users to search for a word in any text</li>
        <li>The StateToProps renders TextInput and SearchResult. </li>
        <li>When a user types in either of boxes we should see new words given emphasis in the SearchResult component</li>
        <li>You don't have to make any changes in SearchResult component</li>
      </ul>

      <a href="https://reactjs.org/docs/lifting-state-up.html">Lifting state up</a><br/>

      <TextInput 
        content={content} 
        searchQuery={searchQuery}
      />
      <SearchResult 
        searchQuery={searchQuery} 
        content={content}
      />
     
    </div>
  )
}

export default StateToProps
