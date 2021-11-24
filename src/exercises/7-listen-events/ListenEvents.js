import { useState } from "react"


const ListenEvents = () => {
  const [type, setType] = useState("");
  function clicked(){
    alert(`I've been clicked`);
    console.log(`I've been clicked`);
  }
  
  function handleSubmit(event){
    let typing = event.target.value;
    document.querySelector("#paragraph").innerHTML = `${typing}`
  }

  

  return(
    <div className="exercise seventh">
      <h2>Listen user events</h2>
      <h3>Instructions: </h3>
      <ul>
        <li>Have a look at the list of elements below</li>
        <li>Please add event listener for each accordingly</li>
        <li>Add onClick event listener to button which logs "I've been clicked" to the console</li>
        <li>Add onChange event listener which logs out what the user has typed in the input field</li>
      </ul>

      <a href="https://reactjs.org/docs/handling-events.html">Documentation and examples</a>

      <div className="flex">
        <button onClick={clicked}>Click me</button>
        <input onChange={handleSubmit} placeholder="Change me"/>
        <p id="paragraph"></p>
      </div>
    </div>
  )
}

export default ListenEvents
