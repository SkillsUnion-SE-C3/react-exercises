import React, {useState, useEffect} from "react"
import Books from "./Books"
//const url = "https://openlibrary.org/subjects/romance.json?limit=10"


const UseEffectWithFetch = () => {


  return (
    <div className="exercise eleventh">
      <h2>Render infromation from api</h2>
      <h3>Instructions: </h3>
      <ol>
        <li>In Books.js make a request to the url provided</li>
        <li>For each book under the works key render the title of the book</li>
      </ol>
      <a href="https://reactjs.org/docs/hooks-effect.html">Documentation for useEffect</a><br />
      <a href="https://medium.com/geekculture/simple-data-fetching-in-react-with-the-fetch-api-and-axios-with-hooks-useeffect-and-usestate-85d6bd7357c2">Fetching data with hooks example</a>
      <p>Only change Books.js</p>
      <Books />
    </div >
  )
}

export default UseEffectWithFetch