import { useState } from 'react'

const Sum = () => {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)

  return (
    <div className="flex">

      <div className="inputs">
        <input onChange={(event) => { setFirst(event.target.value) }} placeholder="first number" />
        <input onChange={(event) => { setSecond(event.target.value) }} placeholder="second number" />
      </div>
      {/*       
      Instead of the word SUM we should render 
      the sum of the numbers from the two input fields
      As the user changes number so should we see the update
      immedediately
       */}
      <div className="sum">{parseInt(first) + parseInt(second)}</div>
    </div>
  )
}

export default Sum
