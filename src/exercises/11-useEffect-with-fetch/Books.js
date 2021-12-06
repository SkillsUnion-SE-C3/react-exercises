import { useState, useEffect } from "react"

const url = "https://openlibrary.org/subjects/romance.json?limit=10"

const Books = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(url)
      const data = await resp.json()
      setBooks(data.works)
    }

    getData()
  })

  return (
    <div className="exercise eleventh">
      {books.map((book, i) => <h3 key={`book-${i}`}>{book.title}</h3>)}
    </div>
  )
}

export default Books