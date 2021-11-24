import { useState } from "react"


const Sum = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

    function add(event){
      setTotal(number1 + number2);
    }

  return(
    <div className="flex">
      
      <div className="inputs">
        <input onChange={e => setNumber1(+e.target.value)} placeholder="first number" value={number1}/>
        <button onClick={add}>+</button>

        <input onChange={e => setNumber2(+e.target.value)} placeholder="second number"  value={number2}/>
      </div>
{/*       
      Instead of the word SUM we should render 
      the sum of the numbers from the two input fields
      As the user changes number so should we see the update
      immedediately
       */}
      <div className="sum">{total}</div>
    </div>
  )
}

export default Sum
