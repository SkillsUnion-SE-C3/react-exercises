import React, {useState, useEffect} from 'react';

const url = "https://openlibrary.org/subjects/romance.json?limit=10"


const Books = () => {
  const [books, setBooks] = useState( [] );

  useEffect(() => {
    fetch(`https://openlibrary.org/subjects/romance.json?limit=10`)
    .then(response => response.json())
  .then(json => setBooks(json.works));
  }, [])


  return (
    <div className="exercise eleventh">
      <p>Render book titles from api instead of this paragraph</p>
            {books.map(book => {
    return <p>{book.title}</p>
  })}
    </div>
  )
}

export default Books